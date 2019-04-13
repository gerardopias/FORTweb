package net.lacnic.fortweb;

import javax.servlet.annotation.WebListener;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
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
}