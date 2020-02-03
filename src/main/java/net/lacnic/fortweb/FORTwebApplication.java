package net.lacnic.fortweb;

import org.apache.wicket.Page;
import org.apache.wicket.markup.html.IPackageResourceGuard;
import org.apache.wicket.markup.html.SecurePackageResourceGuard;
import org.apache.wicket.protocol.http.WebApplication;
import org.apache.wicket.spring.injection.annot.SpringComponentInjector;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class FORTwebApplication extends WebApplication {
    @Override
    public Class<? extends Page> getHomePage() {
        return HomePage.class;
    }
    @Override
    protected void init() {
        super.init();
        mountPage("/about",About.class);
//        mountPage("/monitor", FortMonitor.class);
        mountPage("/validator", FortValidator.class);
        mountPage("/contact", Contact.class);
        getComponentInstantiationListeners().add(new SpringComponentInjector(this,
                WebApplicationContextUtils.getRequiredWebApplicationContext(
                        getServletContext())));
        IPackageResourceGuard packageResourceGuard = getResourceSettings().getPackageResourceGuard();
        if (packageResourceGuard instanceof SecurePackageResourceGuard)
        {
            SecurePackageResourceGuard guard = (SecurePackageResourceGuard) packageResourceGuard;
            //allowing pdf files
            guard.addPattern("+*.pdf");
        }
    }
}
