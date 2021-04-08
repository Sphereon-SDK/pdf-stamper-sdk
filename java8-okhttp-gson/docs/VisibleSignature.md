
# VisibleSignature

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageSelector** | [**PageSelectorEnum**](#PageSelectorEnum) | The page for the visible signature (multiple pages is not supported, call multiple stamp configurations if that is desired) |  [optional]
**connector** | [**Connector**](Connector.md) | The connector (location) for the visible signature |  [optional]
**imageComponent** | [**ImageComponent**](ImageComponent.md) | The image for the visible signature |  [optional]


<a name="PageSelectorEnum"></a>
## Enum: PageSelectorEnum
Name | Value
---- | -----
FIRST_PAGE | &quot;FIRST_PAGE&quot;
LAST_PAGE | &quot;LAST_PAGE&quot;
EVEN_PAGES | &quot;EVEN_PAGES&quot;
ODD_PAGES | &quot;ODD_PAGES&quot;
ALL_PAGES | &quot;ALL_PAGES&quot;
SPECIFIC_PAGES | &quot;SPECIFIC_PAGES&quot;



