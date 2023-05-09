package com.example.backend.model;

import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "country")
public class Country {
    @Id
    @SequenceGenerator(
            name = "country_id_sequence",
            sequenceName = "country_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "country_id_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private int id;
    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "country")
    private List<State> state;

}
