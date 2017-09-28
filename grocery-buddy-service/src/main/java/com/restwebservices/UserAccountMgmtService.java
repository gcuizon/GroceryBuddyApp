package com.restwebservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.business.UserBusiness;
import com.domain.business.UserBO;

@RestController
public class UserAccountMgmtService {
	private UserBusiness userBusinessFacade;

	@ResponseBody
    @RequestMapping(value="/services/userLogin", method=RequestMethod.POST, headers="Accept=application/json")
	public UserBO loginUser(@RequestParam(value="userName", defaultValue="Jay") String userName, 
							@RequestParam(value="password", defaultValue="Passw0rd") String password){
		return userBusinessFacade.loginUser(userName, password);
	}
	
	@Autowired
	public void setUserBusinessFacade(UserBusiness userBusinessFacade) {
		this.userBusinessFacade = userBusinessFacade;
	}

}
