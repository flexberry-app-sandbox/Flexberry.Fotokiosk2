package Fotokiosk2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: ИнфоФото
 */
@Entity(name = "IISFotokiosk2ИнфоФото")
@Table(schema = "public", name = "ИнфоФото")
public class InfoFoto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Категория")
    private String категория;

    @Column(name = "Цена")
    private Integer цена;

    @OneToMany(mappedBy = "infofoto", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<DopNastrojki> dopnastrojkis;


    public InfoFoto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКатегория() {
      return категория;
    }

    public void setКатегория(String категория) {
      this.категория = категория;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }


}