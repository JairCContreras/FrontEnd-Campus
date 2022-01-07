package org.formacion.srp;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Recomendador {

	public List<Pelicula> recomendaciones (Cliente cliente) {
		
		List<Pelicula> recomendadas = new ArrayList<>();
		
		for (Pelicula favorita: cliente.getFavoritas()) {
			recomendadas.addAll(BBDD.PELIS_POR_DIRECTOR.get(favorita.getDirector()));
		}
		//remove repeticiones
		recomendadas.removeAll(cliente.getFavoritas());
		
		return recomendadas;
	}
	
	
	/*
	//Create a new clase for the format csv
	public String recomendacionesCSV (Cliente cliente) {
		
		return recomendaciones(cliente).stream()
		      .map(p -> (p.getTitulo() + "," + p.getGenero() + "," + p.getDirector()))
		      .collect(Collectors.joining("\n"));
	}
	*/
}
