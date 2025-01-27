D365SalesOrders App

This app is a Power Apps application designed to interact with Dynamics 365 (D365) data. It connects to the D365 Orders table and provides users with the ability to:

View a list of orders.

Drill down into a specific order to see its details.

1. Sales Orders List (Sales Insight Gallery)

Displays a list of all orders from the D365 Sales Orders table from D365.

Key fields shown:

Order Number

Customer Name

Order Date
and more...

2. Order Details (Customer Order Insight)
(A display form was added to the screen to show more details of the orders and also be able to driil-down to see details)

Displays detailed information for a single order when selected from the list.

Fields shown:

Order Number

Product Details

Total Amount

Order Status and lots more

3. Navigation

Users can navigate between the list of orders and the detailed view of a specific order using drill-down functionality.

Connections

The app uses the following connections:

Dataverse (D365 Sales Orders):

Connected to the Dataverse table for D365 Orders.

Fields mapped include Order Number, Customer Name, Customer ID, Order Date, Total Amount, and Order Status.

Customizations

1. Sales Insight Gallery (Dashboard)

The items property of the gallery displaying orders is set to:

SortByColumns( Filter('salesOrders (v2.0)', SearchInp.Text,'Customer Name'),"orderDate",SortOrder.Descending)

Filters the list of orders based on the search box input.

3. Navigation Logic

Drill-down navigation from the Sales Insight Gallery to select Order using the following formula to search with the Text Input:

Filter('salesOrders (v2.0)', SearchInp.Text,'Customer Name')

This passes the selected order as a context variable to the Customer Order Insight.

2. Customer Order Insight

The form is customized to display the following fields:

Order Number

Product Details

Total Amount

Order Status

The item property of the form is set to: Gallery1.Selected

Ensures the details display form displays the selected order from the Sales Insight Gallery.


4. Styling

Applied consistent styling to match a professional theme:

Font size: 14px for all text.

Colors: Primary color for headers and buttons.

Layout: Responsive design with consistent padding.

How to Import the App

Download the app file (.msapp file) from this repository.

Go to Power Apps Studio and select Import Canvas App.

Upload the .msapp file and follow the instructions to import it into your environment.

Ensure the Dataverse connection is configured to access the D365 Orders table.

How to Use the App

Launch the app in your Power Apps environment.