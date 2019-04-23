package net.lacnic.fortweb;

import org.apache.wicket.model.IModel;
import org.apache.wicket.model.ResourceModel;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class Contact extends FortTemplate {
	private static final long serialVersionUID = 1L;

	public Contact(final PageParameters parameters) {
		super();
		setStatelessHint(true);

		//add(new Label("version", getApplication().getFrameworkSettings().getVersion()));
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

	@Override
	protected IModel<String> getTitleModel() {
		return new ResourceModel("contact.title");
	}
}
