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
import com.sphereon.sdk.pdf.stamper.model.Lifecycle;
import com.sphereon.sdk.pdf.stamper.model.StorageLocation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * Result settings
 */
@ApiModel(description = "Result settings")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-08-28T10:42:07.737+02:00")
public class ResultSettings {
  @SerializedName("lifecycle")
  private Lifecycle lifecycle = null;

  @SerializedName("storageLocation")
  private StorageLocation storageLocation = null;

  public ResultSettings lifecycle(Lifecycle lifecycle) {
    this.lifecycle = lifecycle;
    return this;
  }

   /**
   * The lifecycle of result files
   * @return lifecycle
  **/
  @ApiModelProperty(value = "The lifecycle of result files")
  public Lifecycle getLifecycle() {
    return lifecycle;
  }

  public void setLifecycle(Lifecycle lifecycle) {
    this.lifecycle = lifecycle;
  }

  public ResultSettings storageLocation(StorageLocation storageLocation) {
    this.storageLocation = storageLocation;
    return this;
  }

   /**
   * Result Storage location
   * @return storageLocation
  **/
  @ApiModelProperty(value = "Result Storage location")
  public StorageLocation getStorageLocation() {
    return storageLocation;
  }

  public void setStorageLocation(StorageLocation storageLocation) {
    this.storageLocation = storageLocation;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResultSettings resultSettings = (ResultSettings) o;
    return Objects.equals(this.lifecycle, resultSettings.lifecycle) &&
        Objects.equals(this.storageLocation, resultSettings.storageLocation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(lifecycle, storageLocation);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResultSettings {\n");
    
    sb.append("    lifecycle: ").append(toIndentedString(lifecycle)).append("\n");
    sb.append("    storageLocation: ").append(toIndentedString(storageLocation)).append("\n");
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

