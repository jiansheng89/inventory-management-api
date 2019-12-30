# Inventory Management API

Prototype Overview

Sales
    Add Sales
        Products, amount, total sales
        inventory, amount, total amount consumes
    Deduct inventory amount based on products
    Delete Sales
    addinventory amount based on products
Product (overall)
    Add Product
        Price
        Availability (auto)
        Recipe (ingredient)
    Edit Product
    Delete Product
Inventory (overall)
    Add Stock
        Current amount in each outlet
        Alert range
        List down product that consume this product
    Edit Stock
        Button to adjust stock amount
    Delete Stock
    Every adjustment of inventory will change availability of products

Outlet
    Add Outlet
        Name, address, number, geo location (google map integration)
    Edit outlet
    Delete Outlet

Employee
    Add Employee
        Employee auto add when there is a new login from ADAL, need to edit employee to assign outlet
    Edit Employee
        Edit outlet & privilage (future)
    Delete Employee


