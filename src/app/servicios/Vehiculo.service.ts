import { Injectable } from '@angular/core';
// import { Vehiculo } from '../utilitarios/Modelos/Vehiculo';
import { Observable, from, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://www.epico.gob.ec/vehiculo/public/api/';
  httpOptions = {
    //que tipo de dato le estamos pasando
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 //Realiza una solicitud GET para obtener todos los vehículos. Retorna un Observable de tipo Vehiculo[].
 getVehiculos(filtro?: string, rows?: number, page?: number): Observable<Respuesta> {
  let body = new HttpParams();
  body = filtro ? body.set('filtro', filtro) : body;
  body = rows ? body.set('rows', rows) : body;
  body = page ? body.set('page', page) : body;
  console.log('Realizando solicitud GET para obtener todos los vehículos con los parámetros:', body.toString());
  return this.http.get<Respuesta>(this.baseUrl + 'vehiculos/', { params: body });
}


  //si uso el diseno para recibir Json entonces ya no uso httpParams
  //Realiza una solicitud POST para insertar un nuevo vehículo en la API. Recibe un objeto Vehiculo como parámetro y retorna un Observable.
  insertVehiculo(vehiculo: Vehiculo) {
    console.log('Realizando solicitud POST para insertar un nuevo vehículo:', vehiculo);
    return this.http.post<Respuesta>(this.baseUrl + 'vehiculo/', vehiculo,this.httpOptions);
  }

  //Realiza una solicitud GET para obtener un vehículo específico por su código.
  getVehiculo(codigo: string) {
    console.log('Realizando solicitud GET para obtener un vehículo específico con código:', codigo);

    return this.http.get<Respuesta>(this.baseUrl + 'vehiculo/' + codigo);
  }
  
//Editar vehiculo. Realiza una solicitud PUT para actualizar la información de un vehículo existente.
  actualizarVehiculo(vehiculo: Vehiculo, codigo: string) {
    console.log('Realizando solicitud PUT para actualizar un vehículo con código:', codigo);
  console.log('Datos del vehículo a actualizar:', vehiculo);
    return this.http.put<Respuesta>(this.baseUrl + 'vehiculo/' + codigo, vehiculo, this.httpOptions);
  }

  //Para eliminar vehiculos (si funciona). Realiza una solicitud DELETE para eliminar un vehículo por su código.
  eliminarVehiculo(codigo:string){
    
    return this.http.delete<Respuesta>(this.baseUrl+'vehiculo/'+codigo);
  }

  // addvehiculo(vehiculo: Vehiculo) {
  //   this.listavehiculos.push(vehiculo);
  // }
  
  // private listavehiculos: Array<Vehiculo> = [
  //   {
  //     'codigo': 'A001',
  //     'marca': 'Toyota',
  //     'modelo': 'Corolla',
  //     'ano': 2019,
  //     'kilometraje': 25000,
  //     'precio': 15000,
  //     'calificacion': 4,
  //     'foto': 'https://www.toyota.com.ec//admin/sites/default/files/2022-07/BLANCO_corolla_sedan.png'
  //   },
  //   {
  //     'codigo': 'A002',
  //     'marca': 'Honda',
  //     'modelo': 'Civic',
  //     'ano': 2018,
  //     'kilometraje': 30000,
  //     'precio': 16000,
  //     'calificacion': 3,
  //     'foto': 'https://cdn.motor1.com/images/mgl/WV6rr/s1/lanzamiento-honda-civic-2017.jpg'
  //   },
  //   {
  //     'codigo': 'A003',
  //     'marca': 'Ford',
  //     'modelo': 'Fiesta',
  //     'ano': 2020,
  //     'kilometraje': 20000,
  //     'precio': 18000,
  //     'calificacion': 5,
  //     'foto': 'https://cdn.motor1.com/images/mgl/Qzrb7/s1/lanzamiento-ford-fiesta-2018-mercosur.jpg'
  //   },
  //   {
  //     'codigo': 'A004',
  //     'marca': 'Chevrolet',
  //     'modelo': 'Spark',
  //     'ano': 2017,
  //     'kilometraje': 35000,
  //     'precio': 14000,
  //     'calificacion': 2,
  //     'foto': 'https://www.ambacar.ec/wp-content/uploads/2018/03/chevrolet-spark-gt.png'
  //   },
  //   {
  //     'codigo': 'A005',
  //     'marca': 'Volkswagen',
  //     'modelo': 'Golf',
  //     'ano': 2016,
  //     'kilometraje': 40000,
  //     'precio': 17000,
  //     'calificacion': 4,
  //     'foto': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFBgSFRUZGRgaGRoSGBoaGBgaGhgYGBoaGRkaGBocIy4lHB4rHxgcJjomKy8xNjU1HyU7QDs0Py40NTEBDAwMEA8PGBERGDEdGCE0MTE0MTExNDQxNDQ/MTFAMTExNDE0NDExQD8/NDE1NzExMTQ0MTE/MT8xPzE0Pz80Mf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABMEAACAQIDBQQGBQkEBwkAAAABAgADEQQSIQUGMUFRB2FxkRMiMoGhsRRCUnLBI0NigpKistHwFjNEwkVzg5PD0+EXJCU0U1RVY9L/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQECIf/aAAwDAQACEQMRAD8AmaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIlt6oHEwLkTW4vaQVTlanm5Z6gQe8gGc3jNs1zf/xDAUh3WYj3vUAPlA7aJGVbaLt7W8GFXuVcOPlUEw3IPHeJPdVRflWgSzEiBtn02/0+jeNVD/xpabdym3DbNNvEof8AjQJknl5DP9iweG0qTfqj/mGP7BOfZxlJvcfwJgTJnHUeYjOOo85DP/Z5ib6VqNuZu97eGTXzm+2duBh0t6V3qtzAPo09wX1v3oEhY3FpSptWqMFRFLsx5KouTMiRxjcdsrC3RlolhoUVPTOCOTe1lP3iJravabh0/u8LVtewJFOnf9knpAlqJFNLtSvr9FqW6ish+BAmbQ7UqN7PQxKd+VHA8nv8IEkxOV2Rvzg8Qwp0665ybBHDU2J6KHAzHwvOkp1gdOBgXoiICIiAiIgIiICIiAiIgIiICIiAmPi8WlJGqVHVEUXZmIVQO8maTejeujgwqNmqV30pUKfrVHJ0GnId56G1zpORr4OrXYYnabKxX1qWEU3o0ehqf+q9uZuBrx4ANriN5a+L/wDKXoYb/wBy6flKo5/R6beyP02HPRTaa1XVL0sOju7nM7EtUqVG4Z6jtdmPedANBYTaYXZ1XEkOxKUuRt6zD9BTwHefcDOnwGAp0VyU1CjmeLMerNxJhK5DDbnVKnrYioEB+ogDP739kHwDTjN9cDRw9YYfDu7MB+UZ2UhWYZgq5VGoX1je/tLJb29tNcNh6mIbXIvqr9tz6qL72IHnIHxFdnLVHbMzFiWPMkku3vb4ASjU4miF1BJJP9EzdbB3fw1an6SttCnh3zFRTZMxyi3rE51tqT5TGxWzimEo4lyb1XdEHIpSChn63ztb9U9ZrUIBvaQdy3Z/RFE1qeNXEZmWjSWmgAes5AVWbO1gL5jpooJ5Sxv1sOns/wBBTpszvUFRnzhMoCZAMoVQRcs3EnhN32SL6RnLEZaDelROeeugplyP0UpMoP6b9003ativSbSWmDcU6aUyOjsWqN+66QOdZhzRP2V/lLFQUuaU7/dT+U8aqOo85gLdiFUZnYhVUcWZjYAd5JlHYbgbBXFYg1GRVo0TdsosKjn2ENuKgXYjvUcDOv3i2hXxOIOzMG2TKAcVWF7Ip/NgjW9jqBqSbaANbKRE2Vszkzot/wDWYh9B7sx9yr3SM9mbXxGHY1KdVw7N6R9bq7kkkuvBrknzNrQmpLw3Z5g0TIyu7WtnLlSD1VVso8CD75F28mzGw9Wph2NyhurcMw0ZG94I+IksYHfnBuiF6wpuVBdCr2RiPWXNlsQDzvOM7T6au9LGU3R6dRPRhkIIDIxJuR1D+PqmVnN2+sbs0wuGxD1KFdMzBRWpnO6nJwdbKQNCVPvPSd6+5eCYaU2HetR/xJEgqmbEjoSvnrNlsnbFTDVBVpMQQQWW9ldRxRxzB+HERjW42++27xwtVRq1OoLI543GuViPrgnla+a/LSQezXew4mmcPWa+IpAak61KYsA/3gbBvcec2O29mpjsIUvYOi1aTc1crmR/jY9QSJB2zdo1MJiUroLPTezLfiPZdG7uK+Rk052vqSk9x385dmm2TtFKtNMRTN0qKHHgeR7xw903AMjT2IiAiIgIiICIiAiIgIiWnqgcT7oFbMALnQSP94N+ner9A2Yoq4k3DVDY0qCjRmY8CR36A6esfVNntCG1K4NDB0gtG3ruKtNXe41GpGVfDU93A4uxtnnAYf0NHDVC7WNSoyKC7+KsQFHALfQdSSSF7ZWx0wrGoWbEYyqbPWbVmZtMlO/sLy7+egAHT7P2EARUr2d+ITiieP2j8PnOBXFY9Ky4hMKahW+UMRa5BW9gwN7EzMqb3baH+jF9yVD8nhEnT0CQ3jN69ttxwtdB0TDP88rH4zQY3GbRqX9LRx5vxDDEW8itoHZ9q21c1SlhEPs/lX++90pg+Azm36QkeY9x7C8AMo8FEsNg666/RsSvPWm/n7Ew6iuDdqdUfeRh8xKR3G39r4GvgcJhs9VauHpouZKKupJRRUUhnS92UG4PLvnE1FX6rMePFAvPTg55W/68ZjNil7/faPpadflIro91d56mBd6lNFcugpkOGtowYH1SNRqPfNRisW9So9Z2JeozOx53cknwGtgOQ0mH9LTrPPpSfalF4zteyzYnpcS2KYepQ0XoarDT9lbnxZZxGHvUZadNTUdjlVVBLE9wk7bHwqbN2f6/5tGrVSPr1CMzAHvNlF+6BxfaZtn0mLTBqfUoqXfvrMoP7qMP2m6TmKGGeoStNHdrXIRGcgdSFB0mvFdq+IR2YF6taztrbPWbU/du3kJO2ApYbB01oh0QWuSzKrO3Au1+J+XCGdxCuK2dWQXejUQDm9N1HmwmKarlPR5jk1cLc5c1rZst7XsLX4ydn3hwy/4hPc1/4ZyG8GGwONf0eGF8W12TIjIrgD1jWJAULb6/G9hrexERZVWzn9JVb36E/OVFJI2F7Ka7lTWxFKnYZbU1eqSO8tkAPnOi2f2YYNNKjVqp/ScItu4UwpHmYVGtHfHHIqomIIVFCKvo6NgFFgL5L6ATSBKuIqMwV6lRmZmyJmJZ7sTlQaEsSbAT6Hwe6eCp2KYWjccGZA7D9Z7mblECiwsoHIWAHlCRHnZRRxNLDvQxFCpTUOalIupW4bVlAOoN7nUDj4yRcLU+qfdLJdTwN7Ecjz04++MQjFGCNlaxyno31SeovbTnDTYRMXZ+JFSklQC2dQ1uakjVT3g3HumVIEREBERAREodwOMCuWXrAaDU/wBc5jVK5bQaD5zxRLBWzsedvCUBZVEqPLT2UkzwtAqNuc8CL0HkJQWnmaBeFp7cSxmjNAyLie3Exw0qzgSC6yg8hLT4VDxRfeonhrHlpLbG/Eyi2+Eoc6VM/qKfwlH0OlyoUx+on8peHcPwE9y9T5af9YFtaSghVVV5nKANOQ06m3kZqd9tiVMVgqmHolQ7FGGY2VsrqxBNjb2fO03q6cBKuMCBn7L8co9uiWuLqHcEDkcxW3XynRbF7K2Zc2KxL5yfZpMbAd7OLt5C3fJR+jDNfqPlw+Zl+0kEfYfslwIN2au/3nUD91AfjOt2Fu5hsIpTD0lTN7TaszW4ZmYliO69hNj6UcBqeg1PwlQzHgtvE2+V4FNapkF7d0po4i9j4rwI7+fHh8Zd9GebeQt87y26qLXtx5m/I9ZRdFUctfDX5Sq9xYjThrLRxC9fKW2xY5CBcTDolyq2OnfzHC8rapKUcMt+GuvdbX5CcXvNv7hcLU9E7Mz6ZkpgMUB1BYkgA21te+o01kHa7IphEKDgHqHXkHYvbwGa3umwnP7tbVTEL6WkwZHUMpHVSQQRybUAjunQSKREQEREDD2hjBTXNxJOVR1MwsNWzoj3vnVW8wCZpd48S71nVBcUsi2vwLKHv3XuBfuE5HE7+1MDlpfRxVQ3dD6XKy3OZkPqtfKzEcBpYW0gSgqyoCRtR7XaP18JXX7pR/nlmZQ7WsAfaTEJ96mp/hcyo76Umc1ht+8LWptUoMWIOT11emubIzlQSpzNlRjZQeV7A3mFS31CVAMWaSUmuq1Ezg06oVX9FXRrlWKte9+IsQDA7AmUEzRrvls88MZR97gfOXV3owJ4Y3Df7+mPm0o2hMXmCm28K3DE0D4VqZ/zS4u0aB4VqZ8KifzgZIM9vNFit68MpyIxrMSVApDOCwvdc5IQHQ6FhwmuxO8ddl9IiJRTSz1c9Q2OmqIFCm+ntHrrIOtJMs4jFU6YzVHRB1d1UebGR9tOtiVyHF4xlFRfSCnRJRgulgSqjqbg5uB1M1f0OmyISPWcl2JFyVZrrmbibJYcYqpBfezBj/E0/HNfyA4/1xmxwG0KNYXpVUqW45WDEeIHs+U4jdbCJVrOHRVp00ao5CCmctwqhilgVsrNwvcHXlNHszCGvVzUk9G1Wq3ost1NNCxsRY3GVBckcTeTdi5zamACXEpz1VA0J8yLzXbb25Sw9NqjuqIvtNfnyVQNSe4aystkwA4kDxIlYSQxje1pcxFLDFk+09TKx/VVTbzM6/czfeji7ql0dRmakxBJHMoR7Q1tfQ9RA7OoDprbX8D1lLKn1jfxN/gNJYxeIDAW4XHzEsl5RnfSAOA/CW3xR5WEwmeUGpAyHrE8zLDtw8ZbLy27ajx/AwMg1J4KksFpUnGBjbxbX+jYepX4lUsq/adzlQeGbj3XnzzjaLOzVGfM7E1HvxZmN2I77kyWu0nE5loYfNlV2eu7fZRFtmtz9Uu1uqzG29uvhmw6Jh6IWoyF6bC5dslMMc7fWzE6k8L6WtJqrXYTtFs9XDE+rpVUdCQVb5LJunz52NtbaLAcGS/uPrCfQcgREQEs4irlVm6Anyl6a/a7fkiBa7WXXv5e+1vfA5jbO79d8R9Jw9VUZgA4fML2AFwVvyA0Imq2xuRVxDio7YVmyBCHouw0vqGVlIJv05TqcNiXAAvfxmauK6gSoi+r2auNfo2EbvTEYukfcGzgTCxXZ5X+rhqn6mPpn4VKAJ/akwjEDofhOKr9qODSo9MpX9R2p5giEEqSpIBcG1x0hWr2RsNqCUKdRKqMlVHRAUdxUqmvTao7U7rkVHQ5uHqZTac3tzZdWtTTC0adV6SVXd6qU2qgMAVu7DR6rMWdwD6uZVPszum7Q9l1QFqZiAbgVMOWAPUaNNhQ362c4AXEooGgDJUQAdBmQCBDz7ouOJqj7+AxS/FFMx33cZfrqPvUMevyoGfRVB0dVqI6sjAOrKwIZSLgg8wRKzSiD5orbFC6mthh9411P79MTI2LsMMzOXonLbLZ7qSb9Rrbwn0a1E9Jh4vY1KppUoo/30VvmIgh+nha+dbFDk0ABe3AjQKh11Osv4zEO7hq1dnAYEo5cjvA9WwvbpJLbdLDXuKJX7j1EHkjCWl3Nwo/MA31OZ3a578zGII/2sDiapr1KzjMAgVKahVC8gWe/Ek+JMuI6IAhqMQPVu70xoBwsVOnvkhJuvhhr9Ho+9EJ8yJm0dnInsIq/dUD5RBHiZnQ06VIsrizhEqEOLWs7JZSNT7WmpnWbq7ENFfSVUQORlVFC2ppxy3A9ZjzOvAAdTvQgEqWBXUqZEJ4ch/OfPm+m32x2IKqfyFMlaYvYNbRqh6luXQW77yp2m7XNDBVApsz2oJ4vfMR3hA3vkRbA2O1ZxTU5bjM7kXCLysObE6Be4nQAkNGkfBL9Vxfpy85VsjGthsRTrC6mm4J8ODeIIJ8RJC2juTh1ouUeorrU9CjEhlc5A13FtBc29Xh38JHW0KBUkMCHVijA8rfyIPmJB9H0cQHRXHBgrD3kGXS05zcvEF8DQYm5yqD43B/GdBNI9JlJMrWmTwEvJhupgY0CiSRp1PyH4zJaoicx8zMertEZgFGutu/hwA4wMhMJ1M9q0UUe1bl56TBr1nAu7CmP0yE/d9o+U0W1Nu0aQLtUzBRcm1h4KDqx/q0DQbfxGfarIKTVkp0PQ1EUXKo6nO6jmQKyj+rjocLVysrqjs6IcMgIFkRmzPUd9ALqEFtCSp06cDuhi6mJx7OMwNZmL2bKVpFlOjWNsoC8vq9953+z9l0TiEFR3KZHRAXf1yHSzVCCPWUEDoc/wCjMq0vZJsr/v2KrAepSzUV+9ndQP2QZMk43svytgjWUACriMRWFha4NVlHwW3unZQEREBNRvKbYZ3JIy5XJAvYKwzG3PS+k281+2hehUBFxlNxe115i/eIHEYbeOwBahUdePpMOBXQjvCnOngyC0u/23wSnK9VqZ6VKNZPiyW+Mh7eLHitVAp3FKgPQ0QpsQF0ZsvG7EX5aWmAu18Smi4nEKOgqOB8Glon2hvXgWtbGUPfVRf4iJA+PYGrUYG4L1GBHAguSCIbeDEEWaqHH/2U6dTzzobzCWsTrYHwsB5DQeAkF6JaFTu/Geir3HygfQW5Zvs/C/6hP4RN1IB2VvY9JEpitilCjKAlamUAHALTen6o7sxmw/t5WHs4zEr96hhH/lLRNxlJaQ7Q38xGXMcYSBxL4Ol3D6lTv6TLwm+2IqMtNMZRu2gzYbICemZnC37rxUSsGlxQOvwM4IrtY/nUH3aNI/xVJhbRqbVpoajV6zgcRSoYUsB1y6kjwvAkskdJSaluAkEVN9cQf8Tij4NQp/woZhvvRVPtPim8cZUA8lUCKJ+aoZSKxkU9nm9DtihhnzZKitlzVKlQ51GYWLk5bqG4WvpJRJgRp2tYstVw9EnQB6zDxIRT5K/nMbZWyqyJgqyIWWpVeo4UEkWVlQmw9nIrnuzt1mv7SK2bHsPsUkTzzP8A551+zdnYqgjI2JpijURRTuxz0SyBQy5hYEGxtqCehkVn46mz4vD4dLZAtXEV7gH1SVROPAnK2sjrtLwQTFF1XKtVA4H6SnKfgF853GOxygNSbFZPSPTVrA+kIy5ESmQAFzMjnNe972A0I5LtKuRhzldRlrBc98xA9Hrrra5gdR2TAnA2PD0z27h+Tv8AG875qtNOdz3azhNxcOlPZ9HNVQZw1QhQzt67E2IIAU2sOJ4TNx+9OGp6KM7fptm86aWHnKjpm2iWOVFuegBY+Q4TFxNcr/e1ETuLXb9hL/G04LHb7VHGVSVXoLIP2U/nNWNtm99D4xRIi45G0o0qlY9T+TTzGvmwmdQ2fiX9qtToKeK0lux8W0195kbLvNUH1jLqb1VPtRVdvt3cgPTqNRxVYVcjFAWplXcKSuY5MwBNhoZ8/wBRmZrsWLcDmJLA8wb6yUU3uf7U4vb2FarWetSpkZzncArYseLL0udSOsg83U2iaNdXDZbhqZOuiuMpOmpANj7p3+2ceKWGepmu9R6jYYIQWIcFAcoJuoU37/V4HSRvhtjYkn1KDnwy/wA5Im4G5tY11xGJpMAjB0QhbFh7LOQdbHUDqAb6WgSluvsz6Ng8Phjxp01VrcM9ruf2iZt5Ql7ayuAiIgJbq0wylSLgixHcZciBGu8XZxh6rM+SoCxuXolQT3ujaE96jWcZtPs9oUrM2OegpOVfpGHdFLcbB7qpNgeEn2avbOHoVaTUcQqujCzK3A9COYI4gjUQIEO4Tt/c4/B1P9rlbyKn5y3U7O9oDVaSVB1SrT/ErMrezc/D02JwrVCLk5WCuB3K11NvEE985MYCuh9XMv3Xt8jA21bczHpe+Dqfq5W/hYzXVNiYlT62FxC+NKp/+Zfw2NxqHTFVk8Kjn4Zpu8PvTjEFvpVYnqxVv4lMDkayOh9dXX7ykfMCWjUH2v6853qb944fn8336dM/JRPf7dYk+2mGf71Afg0DhFYWPs8ulxry6zw26/Cd0296t7ez8E/jSA/Aypd58L9bZeF/VRPxAgabd7fTE4WyBvSUxpkcn1R0R+KeGo7pJOye0PB1QMz+ifmr6eTj1T5g905IbzYL/wCMw4/2NM/jL1PejBjhgcOvhhk/CVG628NjYkl3rU0c8XpuisT1Yaqx04kEzmH2LsdeO0Kh+7kPyQzbJvlhhwo018MOPwWX036pjgwXwokf5IGHu5s3Zn0im+GqYqrUVgyHKQoI+0fRqAvW5klKWbgpnAtv+nOs3+7f8EmBju0JLHKzu1jYWYLflfMRYe6Bod8rnaOJuNcyL+zTQfhO23epvXqYl6yB6I9EKObMDnAR0CZSARmKk3udAOcilMQzu1RzdnYsx6k8ZK26W0zVoUaY/NsS/cqAtTJ8SFX9UyKzRTomphqjqrhazvSZBky1MPWqFKbG3rDITx+srEe1OY7WceuIxVNRfKtEE8LguzEjxsi+c3OwAPoYfEEBPSVMQHDKwyklgwZSRf1teepHGR9jsSa1V6xB9ZrgHiF4KDbS4UC9ud4FdXaNRlFMucigKqD1VCgWAsOOnWY2aVrQJl5MGYGLmMqF5usDsKpUNkRm8AfnOq2d2e13sXyoO/U+QgcClJjMrDbPZjYAk9ACZL2zuz6gli93PfoPITp8FselTFkRV8AIEPbN3KxL2OTIOrafCdhsvs8RbGo5buXQSQFpASsCBq8BsWjSFkQDvOpmzAtKogIiICIiAiIgW6ikzWYrZ2abeIHF43d7NynP43dY/ZkpWEpNIHlAhTE7rMPqzW1t3mH1ZPD4JDymM+yUPIQIDqbFYfVmO+yyOUnqpu9TPITDq7qIeUCC22eekttgT0k2VdzUPKYVXcgchAh04Myk4UyWX3GPSWH3EaBFZwplJw56SUG3EfpPDuI/SBFxpma/E4bKc3I/CTCOz5zPT2Y5/atAhunNtsraj0WDo5U8CRrpzDA6FTpp3DpJQpdkNH6xI8GYfjNnheyfBKbsHb9d7fOBGm1N4a2LC0i+dRayIgSmtuBYDjaZ2y91a9QAJTYj7RFh46yZNmbqYWgLU6KL32ufMzcrSA4CBGGzezhzY1XC9yi5851WztzMNTscmc9W1+E6gCewMajhEUWVQB3C0v5RKogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAnk9iB5aLT2IHk9iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/2Q=='
  //   }
  // ];
}

export interface Vehiculo {
  codigo: string;
  marca: string;
  modelo: string;
  kilometraje?:string;
  precio?:number;
  foto?:string|null;
  ano?:number;
  calificacion?:number;

}
export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo|any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}

