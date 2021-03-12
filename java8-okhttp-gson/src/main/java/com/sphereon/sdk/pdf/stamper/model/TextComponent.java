/*
 * PDF stamper
 * The PDF Stamper API enables the possibility to add both static and dynamic stamps on existing PDFs. The stamps can consist of one or more barcode, hyperlink, image, line or text elements.    The flow is generally as follows:  1. Make a configuration containing the stamp information  2. Create a job specifying the desired configuration  3. Add one or more PDF files to the job  4. Start the job for processing  5. Retrieve the processed files    Full API Documentation: https://docs.sphereon.com/api/pdf-stamper/1.0  Interactive testing: A web based test console is available in the Sphereon API Store at https://store.sphereon.com
 *
 * OpenAPI spec version: 1.0
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
import com.sphereon.sdk.pdf.stamper.model.Border;
import com.sphereon.sdk.pdf.stamper.model.Color;
import com.sphereon.sdk.pdf.stamper.model.Connector;
import com.sphereon.sdk.pdf.stamper.model.Point;
import com.sphereon.sdk.pdf.stamper.model.StampComponent;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.List;
import org.apache.commons.lang3.StringUtils;

/**
 * A text component to stamp text on a pdf. When using TextComponents and multiple lines, we suggest to use multiple components, for precise placement of the text. Having said that, common linebreak characters like &#x60;\\r\\n&#x60; and &#x60;\\n&#x60; and unicode variants are supported. Although you can provide a linespacing value, automatic newlines do mean some assumptions will be made.
 */
@ApiModel(description = "A text component to stamp text on a pdf. When using TextComponents and multiple lines, we suggest to use multiple components, for precise placement of the text. Having said that, common linebreak characters like `\\r\\n` and `\\n` and unicode variants are supported. Although you can provide a linespacing value, automatic newlines do mean some assumptions will be made.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-09T08:19:21.333Z")
public class TextComponent extends StampComponent {
  @SerializedName("nonStrokingColor")
  private Color nonStrokingColor = null;

  @SerializedName("fontName")
  private String fontName = null;

  @SerializedName("fontSize")
  private Float fontSize = null;

  @SerializedName("text")
  private String text = null;

  @SerializedName("lineSpacing")
  private Float lineSpacing = null;

  public TextComponent() {
    super(StampType.TEXTCOMPONENT.name());
  }

  public TextComponent nonStrokingColor(Color nonStrokingColor) {
    this.nonStrokingColor = nonStrokingColor;
    return this;
  }

   /**
   * The color of the text
   * @return nonStrokingColor
  **/
  @ApiModelProperty(value = "The color of the text")
  public Color getNonStrokingColor() {
    return nonStrokingColor;
  }

  public void setNonStrokingColor(Color nonStrokingColor) {
    this.nonStrokingColor = nonStrokingColor;
  }

  public TextComponent fontName(String fontName) {
    this.fontName = fontName;
    return this;
  }

   /**
   * The font of the text
   * @return fontName
  **/
  @ApiModelProperty(value = "The font of the text")
  public String getFontName() {
    return fontName;
  }

  public void setFontName(String fontName) {
    this.fontName = fontName;
  }

  public TextComponent fontSize(Float fontSize) {
    this.fontSize = fontSize;
    return this;
  }

   /**
   * The size of the text
   * @return fontSize
  **/
  @ApiModelProperty(value = "The size of the text")
  public Float getFontSize() {
    return fontSize;
  }

  public void setFontSize(Float fontSize) {
    this.fontSize = fontSize;
  }

  public TextComponent text(String text) {
    this.text = text;
    return this;
  }

   /**
   * The text that will be displayed
   * @return text
  **/
  @ApiModelProperty(required = true, value = "The text that will be displayed")
  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public TextComponent lineSpacing(Float lineSpacing) {
    this.lineSpacing = lineSpacing;
    return this;
  }

   /**
   * Linespacing ratio. The default is 0.5 (meaning half a line height). The spacing is only applicable to newlines within a single text component
   * @return lineSpacing
  **/
  @ApiModelProperty(value = "Linespacing ratio. The default is 0.5 (meaning half a line height). The spacing is only applicable to newlines within a single text component")
  public Float getLineSpacing() {
    return lineSpacing;
  }

  public void setLineSpacing(Float lineSpacing) {
    this.lineSpacing = lineSpacing;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TextComponent textComponent = (TextComponent) o;
    return Objects.equals(this.nonStrokingColor, textComponent.nonStrokingColor) &&
        Objects.equals(this.fontName, textComponent.fontName) &&
        Objects.equals(this.fontSize, textComponent.fontSize) &&
        Objects.equals(this.text, textComponent.text) &&
        Objects.equals(this.lineSpacing, textComponent.lineSpacing) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nonStrokingColor, fontName, fontSize, text, lineSpacing, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TextComponent {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    nonStrokingColor: ").append(toIndentedString(nonStrokingColor)).append("\n");
    sb.append("    fontName: ").append(toIndentedString(fontName)).append("\n");
    sb.append("    fontSize: ").append(toIndentedString(fontSize)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
    sb.append("    lineSpacing: ").append(toIndentedString(lineSpacing)).append("\n");
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

  @Override
  public void validate() {
    if (StringUtils.isEmpty(text)) {
      throw new IllegalArgumentException("text component requires text");
    } else if (fontSize != null && fontSize <= 0) {
      throw new IllegalArgumentException("text component requires the font size greater than 0");
    } else if (nonStrokingColor != null && nonStrokingColor.getName() == null && nonStrokingColor.getRgbValue() == null) {
      throw new IllegalArgumentException("text component requires non stroking color with a name of a rgb value");
    }
  }

}

