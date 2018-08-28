
# BarcodeComponent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorCorrectionLevel** | [**ErrorCorrectionLevelEnum**](#ErrorCorrectionLevelEnum) | Specifies what degree of error correction to use, for example in QR Codes, See ISO 18004:2006, 6.5.1. This enum encapsulates the four error correction levels defined by the QR code standard |  [optional]
**barcodeFormat** | [**BarcodeFormatEnum**](#BarcodeFormatEnum) | The barcode format to generate | 
**width** | **Integer** | The preferred width in pixels | 
**content** | **String** | The contents to encode in the barcode | 
**height** | **Integer** | The preferred height in pixels | 
**qrVersion** | **Integer** |  |  [optional]


<a name="ErrorCorrectionLevelEnum"></a>
## Enum: ErrorCorrectionLevelEnum
Name | Value
---- | -----
L | &quot;QR_L&quot;
M | &quot;QR_M&quot;
Q | &quot;QR_Q&quot;
H | &quot;QR_H&quot;


<a name="BarcodeFormatEnum"></a>
## Enum: BarcodeFormatEnum
Name | Value
---- | -----
AZTEC | &quot;AZTEC&quot;
CODABAR | &quot;CODABAR&quot;
CODE_39 | &quot;CODE_39&quot;
CODE_93 | &quot;CODE_93&quot;
CODE_128 | &quot;CODE_128&quot;
DATA_MATRIX | &quot;DATA_MATRIX&quot;
EAN_8 | &quot;EAN_8&quot;
EAN_13 | &quot;EAN_13&quot;
ITF | &quot;ITF&quot;
MAXICODE | &quot;MAXICODE&quot;
PDF_417 | &quot;PDF_417&quot;
QR_CODE | &quot;QR_CODE&quot;
RSS_14 | &quot;RSS_14&quot;
RSS_EXPANDED | &quot;RSS_EXPANDED&quot;
UPC_A | &quot;UPC_A&quot;
UPC_E | &quot;UPC_E&quot;
UPC_EAN_EXTENSION | &quot;UPC_EAN_EXTENSION&quot;



