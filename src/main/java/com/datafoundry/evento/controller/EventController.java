package com.datafoundry.evento.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.datafoundry.evento.model.Event;
import com.datafoundry.evento.service.EventService;

@RestController		//It is used to create Restful web services
@RequestMapping("/event")	//It is used to map web request or used to create base uri
@CrossOrigin(origins="http://localhost:4200")
public class EventController 
{
	//Autowired is used for connection between two classes//
		@Autowired
		  private EventService service;
		  
		  @RequestMapping(value = "/getAll", method = RequestMethod.GET)
		  public List<Event> getAllEvent()
		  {
		    return service.findAll();
		  }
		  
		  @RequestMapping(value = "/getEventById/{id}", method = RequestMethod.GET)
		  public Event getEventById(@PathVariable("id") String id)
		  {
			return service.findByid(id);
		  }
		  
		  //@pathvariable is used for data passed in the uri
		  
		  @RequestMapping(value = "/getEventByTitle/{title}", method = RequestMethod.GET)
		  public Event getEventByTitle(@PathVariable("title") String title) 
		  {
			return service.findBytitle(title);
		  }
		  
		  //Get mapping is used to get the data
		  
		  @GetMapping("/getEventByOwnerId/{id}")
		  public List<Event> getEventbyUser(@PathVariable String id)
		  {
				return service.findByUserid(id);
		  }

		  @GetMapping("/getEventByVenue/{city}")
		  public List<Event> getEventbyvenue(@PathVariable String city)
		  {
			  return service.findByCity(city);
		  }	  
		  
		  
		  //post mapping is used to insert the new data
		  
		  @RequestMapping(value = "/createEvent", method = RequestMethod.POST)
		  public Event createEvent(@Valid @RequestBody Event event) {
		    service.save(event);
		    return event;
		  }

}
