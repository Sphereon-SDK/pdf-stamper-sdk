package com.sphereon.sdk.pdf.stamper.model;

import io.swagger.annotations.ApiModel;

@ApiModel(description = "Defines on which pages a canvas component should be placed. The names are self explanatory. Whenever SPECIFIC_PAGES is being used, you will have to provide page numers 0-baeed")
public enum PageSelector {
   FIRST_PAGE,
   LAST_PAGE,
   EVEN_PAGES,
   ODD_PAGES,
   ALL_PAGES,
   SPECIFIC_PAGES
}
