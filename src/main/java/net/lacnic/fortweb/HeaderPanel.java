package net.lacnic.fortweb;

import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.markup.html.list.ListItem;
import org.apache.wicket.markup.html.list.ListView;
import org.apache.wicket.markup.html.panel.Panel;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

public class HeaderPanel extends Panel {
	public HeaderPanel(String id) {
		super(id);
		final List<Locale> languageOptions = Arrays.asList(
				new Locale("es", "UY"),
				Locale.ENGLISH,
				new Locale("pt", "BR"));


		final ListView<Locale> languages = new ListView<Locale>("locale_item", languageOptions) {

			@Override
			protected void populateItem(final ListItem<Locale> listItem) {
				Link<Void> localeLink = new Link<Void>("locale_link") {
					@Override
					public void onClick() {
						getSession().setLocale(listItem.getModelObject());
					}
				};
				localeLink.add(new Label("locale_label", listItem.getModelObject().getDisplayLanguage(listItem.getModelObject())));
				listItem.add(localeLink);
				add(listItem);
			}
		};
		add(languages);

	}
}
