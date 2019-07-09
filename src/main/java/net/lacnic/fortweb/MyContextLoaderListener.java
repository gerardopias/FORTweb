package net.lacnic.fortweb;

import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import javax.servlet.ServletContextEvent;
import javax.servlet.SessionTrackingMode;
import javax.servlet.annotation.WebListener;
import java.util.EnumSet;

@WebListener
public class MyContextLoaderListener extends ContextLoaderListener {
    public MyContextLoaderListener() {
        super(getWebApplicationContext());
    }
    private static WebApplicationContext getWebApplicationContext() {
        AnnotationConfigWebApplicationContext context
                = new AnnotationConfigWebApplicationContext();
        context.scan("net.lacnic.fortweb");
        context.refresh();
        return context;
    }

    @Override
    public void contextInitialized(ServletContextEvent event) {
        event.getServletContext()
                .setSessionTrackingModes(EnumSet.of(SessionTrackingMode.COOKIE));
        super.contextInitialized(event);
    }
}