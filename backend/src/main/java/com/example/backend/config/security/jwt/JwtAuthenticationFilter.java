package com.example.backend.config.security.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.context.annotation.Configuration;

import java.util.Date;
import java.util.HashMap;

@Configuration
public class JwtAuthenticationFilter {

    long TOKEN_VALIDATION = 3600L * 1000 * 1000; // 1hour
    public static final String SECRET_KEY = "sfdKHGWbkwd34jwe5ewej";

    public String generateToken(String username){
        HashMap<String,Object> claims = new HashMap<>();
        return doGenerateToken(username, claims);
    }

    private String doGenerateToken(String username, HashMap<String, Object> claims) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDATION))
                .addClaims(claims)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public Boolean validateToken(String token, String subject) {
        final String username = getUsernameFromToken(token);
        return (username.equals(subject) && !isTokenExpired(token));

    }

    private Claims getAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    public String getUsernameFromToken(String token) {
        Claims claims = getAllClaims(token);
        return claims.getSubject();
    }

    public Date getExpirationDateFromToken(String token) {
        Claims claims = getAllClaims(token);
        return claims.getExpiration();
    }

    private boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

}
