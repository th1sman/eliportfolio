import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material'
import styles from './Contact.module.css'


interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactInterface {
  title: string
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
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                  <CardContent>
                  
                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                      Fill up the form and our team will get back to you within 24 hours.
                    </Typography>
                    <form>
                      <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                          <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                          <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
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