package com.tek.blipkart.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    int productID;
    int userID;
    int quantity;
    int price;
    String addedPlaced;
    boolean orderPlaced;

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getAddedPlaced() {
        return addedPlaced;
    }

    public void setAddedPlaced(String addedPlaced) {
        this.addedPlaced = addedPlaced;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public boolean isOrderPlaced() {
        return orderPlaced;
    }

    public void setOrderPlaced(boolean orderPlaced) {
        this.orderPlaced = orderPlaced;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", productID=" + productID +
                ", userID=" + userID +
                ", quantity=" + quantity +
                ", price=" + price +
                ", addedPlaced='" + addedPlaced + '\'' +
                ", orderPlaced=" + orderPlaced +
                '}';
    }
}
