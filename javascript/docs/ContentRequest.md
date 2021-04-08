# PdfStamper.ContentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variables** | **{String: String}** | A map with key-values used to replace template variables in components. | [optional] 
**filename** | **String** | The filename | 
**configIds** | **[String]** | A list of configuration ids that have to be applied during executing the job. | 
**formFields** | **{String: String}** | A map with key-values used to fill out PDF forms. Please note that this is different from using variables. Variables are used in texts, hyperlinks and barcodes | [optional] 
**content** | **String** | The file as a base64 encoded string | 


