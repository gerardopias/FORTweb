package net.lacnic;

import org.apache.wicket.request.mapper.parameter.PageParameters;

public class HomePage extends FortTemplate {
	private static final long serialVersionUID = 1L;

	public HomePage(final PageParameters parameters) {
		super();
		setStatelessHint(true);
		//add(new Label("version", getApplication().getFrameworkSettings().getVersion()));

		// TODO Add your page's components here

	}
}
