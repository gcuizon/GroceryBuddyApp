package com.restwebservices;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.business.UserBusiness;
import com.domain.business.UserBO;

@RestController
public class UserAccountMgmtService {
	private UserBusiness userBusinessFacade;
	Logger log = Logger.getLogger(UserAccountMgmtService.class);

	@ResponseBody
    @RequestMapping(value="/services/userLogin", headers="Accept=application/json")
	public UserBO loginUser(@RequestParam(value="name") String userName, 
							@RequestParam(value="password") String password){
		log.info("Username: " + userName + "; ");
		
		return userBusinessFacade.loginUser(userName, password);
	}
	
	@Autowired
	public void setUserBusinessFacade(UserBusiness userBusinessFacade) {
		this.userBusinessFacade = userBusinessFacade;
	}

}
