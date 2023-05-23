package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {
	
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
	    // Write code here that turns the phrase above into concrete actions
	    
		driver.get("https://www.simplilearn.com/");
		
	}

	@Given("I have clicked on Login Link")
	public void i_have_clicked_on_Login_Link() {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement Loginlink = driver.findElement(By.linkText("Log in"));
		Loginlink.click();
	}

	@When("I enter username")
	public void i_enter_username() {
	    // Write code here that turns the phrase above into concrete actions
	  
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys("veenajannu315@gmail.com");
	}

	@When("I enter password")
	public void i_enter_password() {
	    // Write code here that turns the phrase above into concrete actions
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("Shiven@1705");
	}

	@When("I clck on Login button")
	public void i_clck_on_Login_button() {
	    // Write code here that turns the phrase above into concrete actions
	   
		WebElement Submit = driver.findElement(By.name("btn_login"));
		Submit.click();
		
	}

	@Then("I should land on home page")
	public void i_should_land_on_home_page() {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Then("I should get the error message")
	public void i_should_get_the_error_message() {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement error = driver.findElement(By.className("error_msg"));
		String ActError = error.getText();
		String ExpError = "The email or password you have entered is invalid.";
		
		Assert.assertEquals(ActError, ExpError);
	}
	
	@When("I enter username as {string}")
	public void i_enter_username_as(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys(UserNameVal);
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String PassVal) {
	    // Write code here that turns the phrase above into concrete actions
	   
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PassVal);
	}

	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String ExpError) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement error = driver.findElement(By.className("error_msg"));
		String ActError = error.getText();
		
		Assert.assertEquals(ActError, ExpError);
	}







}
