# Back-End MongoDB

### Get All Products
![image](https://user-images.githubusercontent.com/70409607/223786529-a53a2740-6ad5-45f1-97b1-1e486af4ec5c.png)

Por el momento solo se tiene un producto en la base de datos, por lo que solo obtiene este.

### Post Product
![image](https://user-images.githubusercontent.com/70409607/223787294-b1be4832-2478-46dd-ab48-5f0898edbcda.png)

Como se puede ver, se agrega el producto y se muestra un mensaje de éxtio, ahora al obtener todos los productos se muestra lo siguiente:

![image](https://user-images.githubusercontent.com/70409607/223787857-db4fff2d-65c3-433d-b8a8-ffe207ed2c33.png)

### Get One Product
![image](https://user-images.githubusercontent.com/70409607/223788014-32904e01-16e1-43d3-849a-fb2f71758da4.png)

Se obtiene solamente el producto con el "id" igual a 1.

### Put Product
![image](https://user-images.githubusercontent.com/70409607/223788857-2b4dafea-c5b3-496b-8a15-b65dba4d6a84.png)

Para verificar que los cambios se hayan realizado correctamente se aplica un GetOne y se obtiene lo siguiente:

![image](https://user-images.githubusercontent.com/70409607/223789131-3a3dea7f-bc46-4289-85fa-f5d836a95a81.png)

### Delete Product
![image](https://user-images.githubusercontent.com/70409607/223789211-38f663e4-3f37-4f24-a667-3608bb12b414.png)

Ahora si se aplica un GetAll solo se obtendrá el producto con "id" igual a 2 ya que se eliminó el que tenía el 1.

![image](https://user-images.githubusercontent.com/70409607/223789523-6355a962-fc6b-4e3b-a4ed-f5d7d0f9749a.png)
