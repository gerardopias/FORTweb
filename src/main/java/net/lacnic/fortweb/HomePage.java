package net.lacnic.fortweb;

import net.lacnic.fortweb.FortTemplate;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.model.ResourceModel;
import org.apache.wicket.model.StringResourceModel;
import org.apache.wicket.request.mapper.parameter.PageParameters;

import java.util.ResourceBundle;

public class HomePage extends FortTemplate {
	private static final long serialVersionUID = 1L;

	public HomePage(final PageParameters parameters) {
		super();
		//setStatelessHint(true);
		//add(new Label("version", getApplication().getFrameworkSettings().getVersion()));
        //add(new Label("homeTitle", new ResourceModel("homeTitle")));
        add(new Label("homeAboutTitle", new ResourceModel("homeAboutTitle")));
        add(new Label("homeAboutSubTitle", new ResourceModel("homeAboutSubTitle")));
        add(new Label("homeAboutContentP1", new ResourceModel("homeAboutContentP1")));
		add(new Label("homeAboutContentP2", new ResourceModel("homeAboutContentP2")));
		//add(new Label("homeLinkAbout", new ResourceModel("homeLinkAbout")));

		//add(new Label("aboutTitle", ResourceBundle.getBundle("FORTwebApplication").getString("aboutTitle")));// new StringResourceModel("aboutTitle", this, null)));
		// TODO Add your page's components here

	}
}
