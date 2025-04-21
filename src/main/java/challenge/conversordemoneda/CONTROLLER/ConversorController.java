package challenge.conversordemoneda.CONTROLLER;

import challenge.conversordemoneda.CONVERSOR.MonedaConversor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ConversorController {

    @GetMapping("/monedas")
    @ResponseBody
    public Map<String, Double> obtenerMonedas() throws IOException, InterruptedException {
        Map<String, Double> tasas = MonedaConversor.getExchangeRates();

        List<String> monedasFiltradas = List.of("ARS", "BOB", "BRL", "CLP", "COP", "USD");
        Map<String, Double> tasasFiltradas = new HashMap<>();

        for (String moneda : monedasFiltradas) {
            if (tasas.containsKey(moneda)) {
                tasasFiltradas.put(moneda, tasas.get(moneda));
            }
        }

        return tasasFiltradas;
    }

    @GetMapping("/convertir")
    @ResponseBody
    public Map<String, Double> convertirMoneda(@RequestParam double cantidad,
                                               @RequestParam String origen,
                                               @RequestParam String destino) throws IOException, InterruptedException {
        Map<String, Double> rates = MonedaConversor.getExchangeRates();
        double tasaOrigen = rates.get(origen);
        double tasaDestino = rates.get(destino);
        double valorConvertido = (cantidad / tasaOrigen) * tasaDestino;

        return Map.of("valor", valorConvertido);
    }

    @GetMapping("/")
    public String showPage() {
        return "conversor";
    }
}
