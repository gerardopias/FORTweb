package net.lacnic.fortweb;
/*
import org.apache.wicket.protocol.http.WebApplication;
public class FORTwebApplication extends WebApplication {
    public FORTwebApplication() {
    }
    *
     * @see org.apache.wicket.Application#getHomePage()

    @Override
    public Class getHomePage() {
        return HomePage.class;
    }
}
*/
import org.apache.wicket.Page;
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
        getComponentInstantiationListeners().add(new SpringComponentInjector(this,
                WebApplicationContextUtils.getRequiredWebApplicationContext(
                        getServletContext())));
    }
}
