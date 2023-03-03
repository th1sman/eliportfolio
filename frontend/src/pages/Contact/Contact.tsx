import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Grid, TextField, Button, Card, CardContent, Typography, CardMedia } from '@mui/material'
import styles from './Contact.module.css'


interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactInterface {
}

const validationSchema = Yup.object({
  name: Yup.string().required(" El nombre es requerido"),
  email: Yup.string().email("Correo electronico invalido").required("El email es requerido"),
  message: Yup.string().required("El mensaje es requerido")
})

const handleSubmit = async (values: ContactFormData, { setSubmiting, resetForm }: any) => {
  try {
    console.log(values)
    resetForm()
  } catch (error) {
    console.log(error)
  }
  setSubmiting(false)
}

const Contact: React.FC<ContactInterface> = () => {

  const initialValues = {
    name: '',
    email: '',
    message: ''
  }
  return (
    <div className={styles.form} id={'contact'}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit} >
          {({ isSubmitting }) => (
            <Form>
              <Grid>
                <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
                  <CardContent>
                    <CardMedia
                      component='img'
                      image={"/5.jpeg"}
                    />

                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                      Contactame!
                    </Typography>
                    <form>
                      <Grid container spacing={1} sx={{ paddingTop: '20px', marginBottom: '60px'}}>
                        <Grid xs={12} item>
                          <TextField placeholder="Nombre" label="Nombre" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField type="email" placeholder="Corre Electronico" label="Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField label="Cuentame tu idea" multiline rows={4} placeholder="Mensaje" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
                        </Grid>

                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default Contact