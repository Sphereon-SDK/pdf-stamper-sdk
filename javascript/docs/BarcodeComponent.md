# PdfStamper.BarcodeComponent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorCorrectionLevel** | **String** | Specifies what degree of error correction to use, for example in QR Codes, See ISO 18004:2006, 6.5.1. This enum encapsulates the four error correction levels defined by the QR code standard | [optional] 
**barcodeFormat** | **String** | The barcode format to generate | 
**width** | **Number** | The preferred width in pixels | 
**content** | **String** | The contents to encode in the barcode | 
**height** | **Number** | The preferred height in pixels | 
**qrVersion** | **Number** |  | [optional] 


<a name="ErrorCorrectionLevelEnum"></a>
## Enum: ErrorCorrectionLevelEnum


* `L` (value: `"QR_L"`)

* `M` (value: `"QR_M"`)

* `Q` (value: `"QR_Q"`)

* `H` (value: `"QR_H"`)




<a name="BarcodeFormatEnum"></a>
## Enum: BarcodeFormatEnum


* `AZTEC` (value: `"AZTEC"`)

* `CODABAR` (value: `"CODABAR"`)

* `CODE_39` (value: `"CODE_39"`)

* `CODE_93` (value: `"CODE_93"`)

* `CODE_128` (value: `"CODE_128"`)

* `DATA_MATRIX` (value: `"DATA_MATRIX"`)

* `EAN_8` (value: `"EAN_8"`)

* `EAN_13` (value: `"EAN_13"`)

* `ITF` (value: `"ITF"`)

* `MAXICODE` (value: `"MAXICODE"`)

* `PDF_417` (value: `"PDF_417"`)

* `QR_CODE` (value: `"QR_CODE"`)

* `RSS_14` (value: `"RSS_14"`)

* `RSS_EXPANDED` (value: `"RSS_EXPANDED"`)

* `UPC_A` (value: `"UPC_A"`)

* `UPC_E` (value: `"UPC_E"`)

* `UPC_EAN_EXTENSION` (value: `"UPC_EAN_EXTENSION"`)




