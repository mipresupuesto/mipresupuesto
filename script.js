var total = 0;
		var total2 = 0;

		function agregarIngreso() {
            // parseInt Convierte un argumento de tipo cadena y devuelve un entero de la base especificada.
            const descripcion = (document.getElementById("descripcion__Ingresos").value);
			const valor = parseInt(document.getElementById("valor_Ingresos").value);
            
            
			// Crear nueva fila en la tabla
			const tablaValores = document.getElementById("tabla_Ingresos");
			const nuevaFila = tablaValores.insertRow();
			const celdaDescripcion = nuevaFila.insertCell(0);
            const celdaValor = nuevaFila.insertCell(1);
            const celdaTotal = nuevaFila.insertCell(2);

			// Actualizar celda con valor ingresado
			celdaValor.innerHTML = valor;
            celdaDescripcion.innerHTML = descripcion;
            console.log(celdaDescripcion);

			// Actualizar suma total y celda correspondiente
			total += valor;
			document.getElementById("total_Ingresos").innerHTML = total;

			// Limpiar valor del input
			document.getElementById("valor_Ingresos").value = "";
            document.getElementById("descripcion__Ingresos").value = "";
		}

		
		function agregarGasto() {
			const descripcion2 = (document.getElementById("descripcion__Gastos").value);
            const valor2 = parseInt(document.getElementById("valor_Gastos").value);

			// Crear nueva fila en la tabla
			const tablaValores = document.getElementById("tabla_Gastos");
			const nuevaFila = tablaValores.insertRow();
			const celdaDescripcion2 = nuevaFila.insertCell(0);
            const celdaValor2 = nuevaFila.insertCell(1)
			const celdaTotal = nuevaFila.insertCell(2);

			// Actualizar celda con valor ingresado
			celdaDescripcion2.innerHTML = descripcion2;
            celdaValor2.innerHTML = valor2;

			// Actualizar suma total y celda correspondiente
			total2 += valor2;
			document.getElementById("total_Gastos").innerHTML = total2;

			// Limpiar valor del input
			document.getElementById("descripcion__Gastos").value = "";
            document.getElementById("valor_Gastos").value = "";
		}

        function restar() {
        // obtener total de ingresos y gastos
        const totalIngresos = parseInt(document.getElementById("total_Ingresos").innerHTML);
        const totalGastos = parseInt(document.getElementById("total_Gastos").innerHTML);

        // calcular balance y actualizar celda correspondiente
        const balance = totalIngresos - totalGastos;
        document.getElementById("balance").innerHTML = balance;

        // actualizar celda de total de gastos en balance
        document.getElementById("total_Ingresos_Saldo").innerHTML = totalIngresos;
        document.getElementById("total_Gastos_Saldo").innerHTML = totalGastos;
    }