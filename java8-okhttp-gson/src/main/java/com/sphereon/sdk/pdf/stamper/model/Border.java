/*
 * PDF stamper
 * The PDF Stamper API enables the possibility to add both static and dynamic stamps on existing PDFs. The stamps can consist of one or more barcode, hyperlink, image, line or text elements.    The flow is generally as follows:  1. Make a configuration containing the stamp information  2. Create a job specifying the desired configuration  3. Add one or more PDF files to the job  4. Start the job for processing  5. Retrieve the processed files    Full API Documentation: https://docs.sphereon.com/api/pdf/stamp/0.2/html  Interactive testing: A web based test console is available in the Sphereon API Store at https://store.sphereon.com
 *
 * OpenAPI spec version: 0.2
 * Contact: dev@sphereon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.sphereon.sdk.pdf.stamper.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.sphereon.sdk.pdf.stamper.model.Color;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * Border of component
 */
@ApiModel(description = "Border of component")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-08-28T10:42:07.737+02:00")
public class Border {
  @SerializedName("color")
  private Color color = null;

  @SerializedName("thickness")
  private Float thickness = null;

  public Border color(Color color) {
    this.color = color;
    return this;
  }

   /**
   * The color of the border
   * @return color
  **/
  @ApiModelProperty(required = true, value = "The color of the border")
  public Color getColor() {
    return color;
  }

  public void setColor(Color color) {
    this.color = color;
  }

  public Border thickness(Float thickness) {
    this.thickness = thickness;
    return this;
  }

   /**
   * The thickness of the border line
   * @return thickness
  **/
  @ApiModelProperty(value = "The thickness of the border line")
  public Float getThickness() {
    return thickness;
  }

  public void setThickness(Float thickness) {
    this.thickness = thickness;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Border border = (Border) o;
    return Objects.equals(this.color, border.color) &&
        Objects.equals(this.thickness, border.thickness);
  }

  @Override
  public int hashCode() {
    return Objects.hash(color, thickness);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Border {\n");
    
    sb.append("    color: ").append(toIndentedString(color)).append("\n");
    sb.append("    thickness: ").append(toIndentedString(thickness)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

