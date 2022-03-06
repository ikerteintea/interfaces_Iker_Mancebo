package application;

import java.util.Map;

import application.Main;
import javafx.beans.property.SimpleStringProperty;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;

public class PersonController {
	@FXML
    private TableView<Map<String,Object>> personTable;
    @FXML
    private TableColumn<Map<String,Object>, String> firstNameColumn;
    @FXML
    private TableColumn<Map<String,Object>, String> lastNameColumn;
	
    @FXML
    private Label firstNameLabel;
    @FXML
    private Label lastNameLabel;
    @FXML
    private Label streetLabel;
    @FXML
    private Label postalCodeLabel;
    @FXML
    private Label cityLabel;
    @FXML
    private Label birthdayLabel;

    private Main mainApp;    

	@FXML
    private void initialize() {    		
    	firstNameColumn.setCellValueFactory(cellData -> new SimpleStringProperty(cellData.getValue().get("firstName").toString()));
    	lastNameColumn.setCellValueFactory(cellData -> new SimpleStringProperty(cellData.getValue().get("lastName").toString()));
    }

    public void setMainApp(Main mainApp) {
        this.mainApp = mainApp;
        
        personTable.setItems(this.mainApp.getMapData()); 
    }
}