package net.lacnic.fortweb;

import org.apache.wicket.Component;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.ResourceModel;

public class FortTemplate extends WebPage {
	public static final String CONTENT_ID = "contentComponent";

	private Component headerPanel;
	private Component menuPanel;
	private Component footerPanel;

	public FortTemplate() {
		add(headerPanel = new HeaderPanel("headerPanel"));
		add(new Label("template.title", getTitleModel()));
	}

	/**
	 * override this method to change page head title. It must be a Resource model in order to be localization aware
	 * @return ResourceModel containing the title of the page.
	 */
	protected IModel<String> getTitleModel() {
		return new ResourceModel("template.title");
	}


}
