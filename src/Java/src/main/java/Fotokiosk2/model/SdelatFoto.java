package Fotokiosk2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СделатьФото
 */
@Entity(name = "IISFotokiosk2СделатьФото")
@Table(schema = "public", name = "СделатьФото")
public class SdelatFoto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолВоФото")
    private Integer колвофото;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "InfoFoto")
    @Convert("InfoFoto")
    @Column(name = "ИнфоФото", length = 16, unique = true, nullable = false)
    private UUID _infofotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "InfoFoto", insertable = false, updatable = false)
    private InfoFoto infofoto;


    public SdelatFoto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКолВоФото() {
      return колвофото;
    }

    public void setКолВоФото(Integer колвофото) {
      this.колвофото = колвофото;
    }


}