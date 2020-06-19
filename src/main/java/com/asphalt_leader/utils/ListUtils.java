package com.asphalt_leader.utils;

import java.util.List;
import java.util.stream.Collectors;

public class ListUtils {

	
	public static List<?> intersect(List<?> list1 , List<?> list2){

		return list1.stream()
		  .distinct()
		  .filter(list2::contains)
		  .collect(Collectors.toList());
	}
	
	
	
}
