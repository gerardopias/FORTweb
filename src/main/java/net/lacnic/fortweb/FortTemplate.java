package net.lacnic;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.Component;

public class FortTemplate extends WebPage {
    public static final String CONTENT_ID = "contentComponent";

    private Component headerPanel;
    private Component menuPanel;
    private Component footerPanel;

    public FortTemplate(){
        add(headerPanel = new HeaderPanel("headerPanel"));
        //add(menuPanel = new MenuPanel("menuPanel"));
        //add(footerPanel = new FooterPanel("footerPanel"));
        //add(new Label(CONTENT_ID, "Put your content here"));
    }

    //getters for layout areas
    //...
}
