package net.lacnic.fortweb;

import org.apache.wicket.request.mapper.parameter.PageParameters;

public class About extends FortTemplate {
	private static final long serialVersionUID = 1L;

	public About(final PageParameters parameters) {
		super();
		setStatelessHint(true);

		//add(new Label("version", getApplication().getFrameworkSettings().getVersion()));

		// TODO Add your page's components here

	}
	@Override
	protected void onInitialize() {
		super.onInitialize();

		visitChildren((component, visit) -> {
			if(!component.isStateless()) {
				System.out.println("Component " + component.getId() + " is not stateless");
			}
		});
	}
}
