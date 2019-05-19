package net.lacnic.fortweb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import javax.servlet.http.HttpSession;
@Component
@SessionScope
public class MySessionBean {
    @Autowired
    private HttpSession httpSession;


    public HttpSession getHttpSession() {
        return httpSession;
    }
}