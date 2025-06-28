-- Create Data Warehouse

CREATE DATABASE IF NOT EXISTS Datawarehouse;

DROP TABLE IF EXISTS bronze_crm_cust_info;
create table bronze_crm_cust_info(
	cst_id INT,
    cst_key VARCHAR(50),
    cst_firstname VARCHAR(50),
    cst_lastname VARCHAR(50),
    cst_martial_status VARCHAR(50),
    cst_gndr VARCHAR(50),
    cst_create_date DATE
);
DROP TABLE IF EXISTS bronze_crm_prod_info;
create table bronze_crm_prod_info(
	prd_id INT,
    prd_key VARCHAR(50),
    prd_name VARCHAR(50),
    prd_cost INT,
    prd_line VARCHAR(50),
    prd_start_date DATETIME,
    prd_end_date DATETIME
);
DROP TABLE IF EXISTS bronze_crn_sales_details;
create table bronze_crn_sales_details(
	sls_ord_num VARCHAR(50),
    sls_prd_key VARCHAR(50),
    sls_cust_id INT,
    sls_order_dt INT,
    sls_due_dt INT,
    sls_sales INT,
    sls_quantity INT,
    sls_price INT
);
DROP TABLE IF EXISTS bronze_erp_cust_az12;
create table bronze_erp_cust_az12(
	cid INT,
    bdate DATETIME,
    gen VARCHAR(50)
);
DROP TABLE IF EXISTS bronze_erp_loc_a101;
create table bronze_erp_loc_a101(
	cid VARCHAR(50),
    cntry VARCHAR(50)
);
DROP TABLE IF EXISTS bronze_erp_px_cat_g1v2;
create table bronze_erp_px_cat_g1v2(
	id VARCHAR(50),
    cat VARCHAR(50),
    subcat VARCHAR(50),
    maintainance VARCHAR(50)
);

LOAD DATA LOCAL INFILE 'D:/Orange/Data Warehousing Inception/dataset/source_crm/cust_info.csv'
INTO TABLE bronze_crm_cust_info
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;




    