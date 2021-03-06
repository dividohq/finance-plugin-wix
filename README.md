# integrations-wix

This is a guide for integrating a  **_Pay by Finance_** button to the Wix Store template cart, giving the customer the option to purchase all of the items in their basket through finance. Please note that this feature will not update the stock quantities tracked in your Wix Store, and is not compatible with Wix's Invoices section.

### Before proceeding:
Please note that these steps are carried out from your site's Wix Editor (which can be reached by clicking on the  **_Edit Site_** link on the bottom left of your site's dashboard), and you must have  **_Dev Mode_** enabled in your site's Wix Editor. You can do this by clicking on the  **_Dev Mode_** option in the top menu and clicking on the  **_Turn on Dev Mode_** button.

### Adding a "pay by finance" option to your cart page

1. Copy the code located in the  **_payments.jsw_** and  **_http-functions.js_** files and add pages with the same name within the  **_Backend_** section of your Wix website (hover over  **_Backend_** in the left hand  **_Site Structure_** menu and click on the  **_+_** button which appears to the right of the text. Click on  **_New File_** in the dropdown options popup). Copy the code into the respective new files
2. Click on one of the pages that already exists in the left hand  **_Site Structure_** menu, then click on the  **_+ (Add)_** button within the editor screen and select the  **_Lightbox_**  option. Choose a lightbox from the list (preferably one like  **_Welcome (Jazzy)_** that opens in the middle of the page and has a close button outside of the actual lightbox)
3. Click on the  **_**Menus and Pages**_** pill, then click on the  **_Lightboxes_** option in the first menu. Click on the ellipsis (**...**) option on the right hand side of your chosen lightbox and then click on the  **_Settings_** link. This should bring up a menu where the first question is  **_"What's the lightbox's name?"_**. Enter  **_financeGateway_** below this, then in the  **_Lightbox Page Settings_** section below this, set  **_Automatically display lightbox on pages_** to  **_No**
4. Click on  **_financeGateway_** link on the  **_Site Structure_** left hand menu. Click anywhere on the Overlay background  and click on the  **_Set Up Overlay_** button. Turn the  **_Clicking closes lightbox_** option off. Format the design of the actual lightbox as you like, but be sure to include a HTML iframe within the lightbox (Click on the  **_+ (Add)_** pill in the editor. Select the  **_More_** link and click on  **_HTML iframe_** within the  **_Embeds_** section). This iframe will show your customer's finance plan details and the application form, so it's recommended that you make this as large as possible (preferably 800px+ width and 600px+ height)
5. Click on the iframe within the editor and change the  **_ID_** to `gatewayIframe` on the  **_Properties_** panel (If the Properties panel is not initially visible, click on  **_Tools_** on the top menu and check the  **_Properties Panel_** checkbox in the  **_Developer Tools_** option).
6. Click on the  **_Change Website Address_** or  **_Edit Code_** button which appears when clicking on your iFrame element. Select the  **_Wesbite Address_** option to the  **_What do you want to add?_** question. A  **_What's the website address?_** question should appear below. Please type `https://wix.divido.com/gateway.html` into the answer box
7. Copy the code located in the  **_financeGateway.jsw_** file into the  **_financeGateway Lightbox Page Code_** (this should be right at the bottom of the page when you have  **_financeGateway_** selected on the  **_Site Structure_** left hand menu. Click on the  **_Open_** icon on the bottom right of the bar to expand it. Make sure the  **_Page_** tab is selected on the left hand panel rather than  **_Site**), replacing anything that was already in there
8. Click on  **_Cart Page_** on the left hand  **_Site Structure_** menu. Add a button to the page wherever you prefer (though preferably near the  **_Checkout_** button). In the properties menu (follow instructions in #5 if you do not see the  **_Properties Panel**) change the ID to `financeGatewayBtn` and tick the  **_Hidden on load_** checkbox. Change the text within this button to something appropriate like "Pay by finance"
9. Copy the code located in the  **_cartPage.jsw_** file and paste the code into the  **_Cart Page Page Code_** area (located in the same place as the  **_financeGateway Lightbox Page Code_** whilst  **_Cart Page_** is the selected page on the  **_Site Structure_** menu), replacing anything already in there
10. Update lines  **_7_** and  **_8_** in the  **_payments.jsw_** page to include your API Key and the shop's URL respectively. (Please contact your finance provider to obtain a valid API key)
11. If you would like to add a minimum amount for the finance option to be available, you can do so by increasing the number in line **_9_** of the **_payments.jsw_** to the lowest amount (in your shop's currency) that you wish to accept finance transactions
12. If you would like the language of your _finance plans widget_ to match the language of your shop, you can do so by changing the _languageOverride_ option to _true_ in line **_11_** of the **_payments.jsw_**
13. Add a database collection: Click on the  **_plus_** icon which appears when hovering over the  **_Database_** label on the left hand  **_Site Structure_** menu). Choose the  **_New Collection_** option in the pop-up menu. Name the collection  **_applications_** and choose  **_Private Data_** in the  **_What's the database collection for?_** dropdown
14. From your new collection (click on  **_applications_** in the left hand  **_Site Structure_** menu to see the collection), click on the  **_+ (Add Field)_** icon to add fields corresponding to the information in the  **_applications.csv_** file
15. Hover over the  **_Pages_** label within the  **_Site Structure_** left hand menu and click on the  **_+_** icon that appears adjacent, then click on  **_Add Page_** in the popup list. Entitle the page  **_Complete_**. Click on the  **_cog_** icon that appears next to the page title when you hover above it in the left hand  **_Site Structure_** menu and choose the  **_settings_** option in the dropdown list. Click on the ellipsis (**...**) option next to the  **_Complete_** pill within the Site Menu and click on the  **_Hide_** link in the dropdown menu. Choose the  **_SEO (Google)_** tab in the  **_Page Settings_** section and underneath the question  **_"What's the page URL?"_**, type  **_"complete-application"_**. This is the page that your customer will end up on after completing the process, so design it how you wish.
16. Hover over the  **_Pages_** label within the  **_Site Structure_** left hand menu and click on the  **_+_** icon that appears adjacent, then click on  **_Add Page_** in the popup list. Entitle the page  **_Apply_**. Click on the  **_cog_** icon that appears next to the page title when you hover above it in the left hand  **_Site Structure_** menu and choose the  **_settings_** option in the dropdown list. Click on the ellipsis (**...**) option next to the  **_Apply_** pill within the Site Menu and click on the  **_Hide_** link in the dropdown menu. Choose the  **_SEO (Google)_** tab in the  **_Page Settings_** section and underneath the question  **_"What's the page URL?"_**, type  **_"application-redirect"_**. This page will be shown very briefly before the the customer is redirected to the finance application, so you may want to change the Layout (in the the **_Layouts_** tab of the **_Page Settings_** section) to **_No Header & Footer_** display some text on the page stating that the customer will be redirected shortly.
17. Copy the code located in the  **_apply.jsw_** file and paste the code into the  **_Apply Page Code_** area (located in the same place as the  **_financeGateway Lightbox Page Code_** whilst  **_Apply_** is the selected page on the  **_Site Structure_** menu), replacing anything already in there


## You can carry out the following steps if you wish to add cart information to your  **_Application Complete_** page
1. Click on the link to your  **_Complete_** page, situated on the left hand  **_Site Structure_** menu
2. Click on the  **_+ (Add)_** pill on the left of the Wix Editor then hover over the  **_Text_** option. Drag the appropriate text option into your  **_Complete_** page, then click on the text field and change the ID in the  **_Properties_** panel to `applicationId`. This field will now show the Finance Application ID.
3. Click on the  **_+ (Add)_** pill on the left of the Wix Editor then hover over the  **_Lists & Grids_** option. Drag a  **_Repeater_** element from the list into your page (preferably a more text based one). Click on the repeater and change the ID in the  **_Properties_** Panel to `itemRepeater`. This will contain your customer's cart items.
4. Click on the  **_Manage Items_** pill that appears when clicking on your Repeater in the editor and remove all but the first Item in the list by clicking on the  **_Ellipsis icon_** adjacent to the items you want to remove, and choosing the  **_Delete_** option from the popup list
5. Add text to the repeater container (by clicking on the  **_+ (Add)_** pill in the Wix Editor and hovering over the  **_Text_** option) or edit existing text within the repeater, changing the ID in the text element's  **_Properties_** panel so that the information within will automatically display the following information:
    - `itemName`: The products name
    - `itemPrice`: The product price
    - `itemQuantity`: The quantity of the product
    - `itemOptions`: The various options (ie. size) of the chosen product
6. You can also add a product image to the repeater: Click on the  **_+ (Add)_** pill on the left of the Wix Editor then hover over the  **_Image_** option. Choose a placeholder image and drag it into your repeater container. Edit the image using the resize and crop tool built into Wix, and once you're happy with the dimensions, change the ID in the  **_Properties_** panel to `itemImage`. 
7. Open the code for this page (by clicking on the  **_Complete Page Code_** bar at the bottom of the Wix Editor) and copy the code located in complete.jsw into it


### You can carry out the following steps if you wish to administer your finance applications via an Admin only page on your site:

1. Hover over the  **_Pages_** label within the  **_Site Structure_** left hand menu and click on the  **_+_** icon that appears adjacent, then click on  **_Add Page_** in the popup list
2. Entitle the new page  **_Applications_**, then click on the cog that appears when you hover over it in the  **_Site Structure_** menu, select the  **_Settings_** option
3. In the  **_Permissions_** tab, make sure this page is  **_Members Only**. Check the  **_Only selected members or paying customers_** answer to  **_Which members can access this page?_** and choose the  **_Admins_** option from the  **_Select from your Member Roles_** dropdown list
4. Click on the  **_+ (Add)_** pill on the left of the Wix Editor then hover over the  **_Lists & Grids_** option. Drag a  **_Repeater_** element from the list into your page (preferably a more text based one). Click on the repeater and change the ID in the  **_Properties_** Panel to `applicationRepeater`. This element will list all of the orders purchased via finance on your store.
5. Click on the  **_Manage Items_** pill that appears when clicking on your Repeater in the editor and remove all but the first Item in the list by clicking on the  **_Ellipsis icon_** adjacent to the items you want to remove, and choosing the  **_Delete_** option from the popup list
6. Add text (by clicking on the  **_+ (Add)_** pill in the Wix Editor and hovering over the  **_Text_** option) or edit existing text within the repeater, changing the ID in the text element's  **_Properties_** panel so that the information within will automatically display the following information:
    - `applicationId`: The Application's ID #
    - `applicationDate`: The date the application was created
    - `applicationStatus`: The current status of the application
    - `applicationCustomer`: The name of the customer
7. Add buttons (by clicking on the  **_+ (Add)_** pill in the Wix Editor and hovering over the  **_Button_** option) or edit existing buttons within the repeater, changing the ID in the text element's  **_Properties_** panel so that the button will automatically perform the following functions when clicked:
    - `activateBtn`: Send a notification to the lender that the customer has received the goods, and the order has been fulfilled
    - `cancelBtn`: Send a notification to the lender that the application has been cancelled
    - `applicationBtn`: This will redirect to the Application page, if you have carried out the _Application page_ steps below
8. Open the code for this page (by clicking on the  **_Applications Page Code_** bar at the bottom of the Wix Editor) and copy the code located in `applications.jsw` into it

### If you wish to utilise a more detailed page for specific Applications, you can carry out the following steps:

1. Hover over the  **_Pages_** label within the  **_Site Structure_** left hand menu and click on the  **_+_** icon that appears adjacent, then click on  **_Add Page_** in the popup list
2. Entitle the new page  **_Application_**, then click on the cog that appears when you hover over it in the  **_Site Structure_** menu, select the  **_Settings_** option
3. In the  **_Permissions_** tab, make sure this page is  **_Members Only**. Check the  **_Only selected members or paying customers_** answer to  **_Which members can access this page?_** and choose the  **_Admins_** option from the  **_Select from your Member Roles_** dropdown list
4. Add text (by clicking on the  **_+ (Add)_** pill in the Wix Editor and hovering over the  **_Text_** option) or edit existing text within the page, changing the ID in the text element's  **_Properties_** panel so that the information within will automatically display the following information:
    - `applicationId`: The Application's ID #
    - `applicationDate`: The date the application was created
    - `applicationStatus`: The current status of the application
    - `applicationCustomer`: The name of the customer
    - `applicationItems`: The items purchased in this order
    - `applicationAddress`: The address of the customer whose order was purchased
    - `applicationTotal`: The total cost of the purchase
    - `applicationShipping`: The address of the customer whose order was purchased
    - `applicationShippingPrice`: The total cost of the purchase
8. Add buttons (by clicking on the  **_+ (Add)_** pill in the Wix Editor and hovering over the  **_Button_** option) or edit existing buttons within the page, changing the ID in the text element's  **_Properties_** panel so that the button will automatically perform the following functions when clicked:
    - `activateBtn`: Send a notification to the lender that the customer has received the goods, and the order has been fulfilled
    - `cancelBtn`: Send a notification to the lender that the application has been cancelled
4. Click on the  **_+ (Add)_** pill on the left of the Wix Editor then hover over the  **_Lists & Grids_** option. Drag a  **_Repeater_** element from the list into your page (preferably a more text based one). Click on the repeater and change the ID in the  **_Properties_** Panel to `productsRepeater`. This  section will populate with all the items purchased with this application.
5. Click on the  **_Manage Items_** pill that appears when clicking on your Repeater in the editor and remove all but the first Item in the list by clicking on the  **_Ellipsis icon_** adjacent to the items you want to remove, and choosing the  **_Delete_** option from the popup list
6. Add text (by clicking on the  **_+ (Add)_** pill in the Wix Editor and hovering over the  **_Text_** option) and dragging it into the repeater, or edit existing text already within the repeater, changing the ID in the text element's  **_Properties_** panel so that the information within will automatically display the following information:
    - `itemName`: The name of the product
    - `itemSKU`: The unique SKU of the item
    - `itemQuantity`: The quantity purchased
    - `itemPrice`: The individual price of the product
    - `itemOptions`: The options attributed to this item
    - `itemImage`: The image of the item (this ID must be used with an image)
9. Open the code for this page (by clicking on the  **_Applications Page Code_** bar at the bottom of the Wix Editor) and copy the code located in `application.jsw` into it

### You can also make a page for members to keep track of their finance applications, using a similar method to the admin panel guide outlined above:

1. Click on the  **_Menus & Pages_** pill on the top left corner of the Wix Editor. Click on the  **_Member Pages_** option and then click the  **_+ Add a New Page_** button. Click on the  **_ellipsis_** icon on the new page that you've created and click on the  **_Settings_** link. Change the page name under the  **_What's the page name on your Member Menu?_** question to  **_Applications_**
1. Alternatively you can carry out the following in the  **_My Orders_** section of the  **_Members Pages_** (Click on the My Orders page in the  **_Site Structure_** left hand menu)
2. Carry out steps 4 to 6 as outlined in the admin panel guide above
3. Open the code for this page (by clicking on the  **_My Orders/Applications Page Code_** bar at the bottom of the Wix Editor) and copy the code located in  **_members pages/myOrders.jsw_** into it
