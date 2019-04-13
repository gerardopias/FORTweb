package net.lacnic.fortweb;

import javax.servlet.annotation.WebListener;
import org.springframework.web.context.request.RequestContextListener;
@WebListener
public class MyRequestContextListener extends RequestContextListener{}
