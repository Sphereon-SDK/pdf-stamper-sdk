# PdfStamper.PdfSignatureComponent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason (optional) | [optional] 
**certificateSettings** | [**CertificateSettings**](CertificateSettings.md) | The optional certificate name, version and configuration to use for the signature. If not specified the Sphereon supplied certificate will be used | [optional] 
**visibleSignature** | [**VisibleSignature**](VisibleSignature.md) | Visible signature. If not specified, the signature will be invisible in the background | [optional] 
**name** | **String** | The name in the signature | 
**location** | **String** | Location (optional) | [optional] 
**signatureMode** | **String** | The signature mode to use. Only one certification (company/organization seal) can be used for a document and it has to be the first. Many approvals can be used | 


<a name="SignatureModeEnum"></a>
## Enum: SignatureModeEnum


* `CERTIFICATION` (value: `"CERTIFICATION"`)

* `APPROVAL` (value: `"APPROVAL"`)




