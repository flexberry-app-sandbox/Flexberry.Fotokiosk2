package Fotokiosk2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Оплата
 */
@Entity(name = "IISFotokiosk2Оплата")
@Table(schema = "public", name = "Оплата")
public class Oplata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СпособОпл")
    private String способопл;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Время")
    private String время;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SdelatFoto")
    @Convert("SdelatFoto")
    @Column(name = "СделатьФото", length = 16, unique = true, nullable = false)
    private UUID _sdelatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SdelatFoto", insertable = false, updatable = false)
    private SdelatFoto sdelatfoto;


    public Oplata() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСпособОпл() {
      return способопл;
    }

    public void setСпособОпл(String способопл) {
      this.способопл = способопл;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }


}