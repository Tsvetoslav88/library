package org.vexelon.net.library.models.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Data
@Builder
public class BookResponse {

    private Long id;

    private String title;

    private String author;

    private String genre;

    private String description;

    private BigDecimal purchasePrice;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    private Date releaseDate;

    private String ratingScore;

}
