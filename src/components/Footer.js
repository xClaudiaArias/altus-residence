import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Input, Typography, Button } from "@mui/material";
import Image from 'next/image'
import Link from 'next/link';


export default function Footer () {
    return (
        <Box>
            {/* top  */}
            <Box>
                {/* images  */}
                <Box>
                    <Image
                        src="/assets/logos/altus-logo.png"
                        width={300}
                        height={300}
                        alt=""
                    />
                    <Image
                        src="/assets/logos/vict-logo.png"
                        width={300}
                        height={300}
                        alt=""
                    />
                </Box>
                {/* copyright  */}
                <Box>
                    <Typography>
                        ALTUS 2025 - All rights Reserved
                    </Typography>
                </Box>
            </Box>


            {/* bottom  */}

            <Box>
                <Box>
                    <Link href="/acercade">
                        <Typography>ACERCA DE</Typography>
                    </Link>

                    <Typography>
                        Contacto: (829) 192 9183
                    </Typography>
                    {/* social icons  */}
                    <Box>
                        <Link  href="/acercade"><FacebookIcon/></Link>
                        <Link  href="/acercade"><XIcon/></Link>
                        <Link  href="/acercade"><InstagramIcon /></Link>
                    </Box>
                </Box>

                <Box>
                    <Typography>Subscirbete a nuestro boletin informativo</Typography>
                    <Input class="base-Input-input" />
                    <Button>Subscribir</Button>
                </Box>

            </Box>
        </Box>
    );
}