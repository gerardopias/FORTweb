package net.lacnic.fortweb;

import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import org.apache.wicket.protocol.http.WicketFilter;
@WebFilter(value = "/*", initParams = {
        @WebInitParam(name = "applicationClassName",
                value = "net.lacnic.fortweb.FORTwebApplication"),
        @WebInitParam(name = "configuration", value = "development") })
public class MyFilter extends WicketFilter {}