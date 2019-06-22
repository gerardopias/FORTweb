package net.lacnic.fortweb;

import org.apache.wicket.protocol.http.WicketFilter;

import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
@WebFilter(value = "/*", initParams = {
        @WebInitParam(name = "applicationClassName",
                value = "net.lacnic.fortweb.FORTwebApplication"),
        @WebInitParam(name = "configuration", value = "deployment") })
public class MyFilter extends WicketFilter {}