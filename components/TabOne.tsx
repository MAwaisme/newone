import React, { FC, Fragment } from "react";
// import Modal from "./modal";
import useModal from "./useModal";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Image,
    Heading,
    HStack,
    Input,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    VStack
} from '@chakra-ui/react'
// import imgUrl from 'public/bg/loader.png'


const TabOne: FC<{}> = () => {
    // const { isOpen, toggle } = useModal();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <Fragment>
            <div className="boxWrapper__upper">
                <div className="boxWrapper">
                    <div className="boxInner__top">
                        <div className="logo____header">
                            <img className="first____img" src='data:image/png;base64,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' />
                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                        </div>
                        <h4 className="timeeee">0.00% <span>APY</span> </h4>
                    </div>
                    <div className="boxInner">
                        <h2 className="boxRedHeading">WETH - 4.0</h2>
                        <h2 className="timeeee">Time left: <span>17:20:00</span> </h2>
                    </div>
                    <div className="box__footer">
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <Button onClick={onOpen} py={10} className="modal___btn">Collect</Button>

                            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalBody className="modal___________content">
                                        <Image src={'https://dulcet-malabi-b51c3d.netlify.app/loader.PNG'} />
                                        <Button colorScheme='gray' color={'lightgray'}>Loading...</Button>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </div>

                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button className="Unstack">Unstack</button>
                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            {/* <button>Stake</button> */}
                            <Button onClick={onOpen} className={'modal___btn'}>Approved</Button>

                            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                <ModalOverlay />
                                <ModalContent>
                                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                                    {/* <ModalCloseButton /> */}
                                    <ModalBody className="modal___________content px________pading" px={'10'}>
                                        {/* <Lorem count={2} /> */}
                                        {/* <Text>Lorem</Text> */}
                                        <div className="logo____header">
                                            <img className="first____img" src='data:image/png;base64,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' />
                                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                                        </div>
                                        <Heading size={'xs'} pb={'10'}>WETH - 4.0</Heading>
                                        <HStack w={'full'} py={5} justifyContent={'space-between'} alignItems={'center'} position={'relative'}>
                                            <Text fontSize={"12px"} position={'absolute'} right={'14'} top={'0'}>10 LP Balance Available</Text>
                                            <Text>Amount</Text>
                                            <Input placeholder="10" />
                                            <Button bgColor={'white'} color={'black'}>Max</Button>
                                        </HStack>
                                        <HStack w={'full'} justifyContent={'space-between'} pb={'10'}>
                                            <Text fontSize={'13px'}>Lock Duration</Text>
                                            <Slider
                                                w={'60%'}
                                                id='slider'
                                                defaultValue={5}
                                                min={0}
                                                max={100}
                                                colorScheme='teal'
                                                onChange={(v) => setSliderValue(v)}
                                                onMouseEnter={() => setShowTooltip(true)}
                                                onMouseLeave={() => setShowTooltip(false)}
                                            >
                                                <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                                                    10
                                                </SliderMark>
                                                <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                                                    7
                                                </SliderMark>
                                                <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                                                    14
                                                </SliderMark>
                                                <SliderTrack>
                                                    <SliderFilledTrack />
                                                </SliderTrack>
                                                <Tooltip
                                                    hasArrow
                                                    bg='teal.500'
                                                    color='white'
                                                    placement='top'
                                                    isOpen={showTooltip}
                                                    label={`${sliderValue}%`}
                                                >
                                                    <SliderThumb />
                                                </Tooltip>
                                            </Slider>
                                            <Text>Days</Text>
                                        </HStack>
                                        <Button className="pink_________btn" color={'white'}>Stake</Button>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="boxWrapper">
                    <div className="boxInner__top">
                        <div className="logo____header">
                            <img className="first____img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEVifur////BzPeBmO5ffOrG0Pjo7PyLn++1wvVbeeljf+paeOnAy/f5+v5Ydul5ke27x/ZshutzjOzy9P2ltfN9lO5og+uCme7K0/ji5/vc4vpwieyXqfGxvvSruvScrfLU2/mPo/Dg5fvV3Pnu8fyfsfOotvOOFsSGAAAQ10lEQVR4nM2dZ5erOAyGKTaE3ksKSZib5P//xDUphGKqX2ZWn3bvmRN4sC1LsixJ8ubi7HO7iE9Z4oVBYEpmEIRekp3iws/3zvaPlzb7ZcdxtPxcesR1LcswCBPpI9X/GIbluq7kledcY3+72XtsQuhEkZbHqum6RgOLLwzVdU01zrUo2gQTT+jcfpSLZzG4CbYWp+Ea3kX5uUXw9wET3vbXQjetRXRfSouoj3x/w74SkjA60EvIXnMF3ZfSCC/0gISEEToHeveMVYPXG8rwRA+wNQkivOVnlQDwPpBEZRoW82oIQuewOx1heB/IoNwdAC8HIHSubF8A870Yqz1EfLKKEjr5yTPxeG9IKTwJMwoSUv04uacLMZKjrvwh4TULNuV7MaYZ/SPCQ5ZuzveCTDMBnbOaMLpstvw4jNJptRGwktDZmcav8VViSOeVKmcd4dWzfpWvEsu7/hqh9vjFCfoVQu5rzJzlhFGu/v4AvsTy6HLvajHhPv4dBcoVQuL9xoTO3w3gSyx1qZGzjFAr0t9VoX0habFsNS4iPJQbWNiLxSj/bUVIk7+doR8xvCWm6nzCqAj+BwP4FBIU83XqbML9b1ppU0LMy2ydOpfwoP81VUf0uYtxJuE1Ab4cZkNNciQhPQJnqKGHiJ8hx3lu4yxCG7kESUCLFPJD6SyVOoPQ8aG7oOXvc8yiJtZuhn0zTejsoLsg0TWN2kfMj81BnCREA6a5rFF6B/2cNb0xThE6Oxf0Mi8h94gRKjQBTXx3chQnCB0fa6iRhG1jjFDZmaBfnJyoE4RgQCndyS9CekJpL2snQmiDfSVSam9CxQ5hiPZ6Qgo2RUn4tEOehMoDNU9JOrr1jxFekZZMJebd+RLaOmqCkONYFG6E8IDSd/WbeC+H4EWoFLAP+NRfywn3cG8i9eUmoX3HfUF92JkaJIwusMe/hWROi1DxVRziZXDnHyQsUIrgIyT9HK98CJUHxAJ/ilksJaTwkAW5f367JvRPsN2IBEOOxgDhwYMDprXtURMqBe4xxBvQNnxCDabJa3G/Gv1LSO+4tWCV/Dgql9Ap4IBG1vh+NaHi67i5YhRcC5VLmKfwsJrZ+MANQnoGWhUpN3LDI9yr+CFsmscNQkU54eapofJ2RQ5hFMND20RtTqAW4Q4YxbNizq7IIczxkV+zZTi2COk9wD2HcOZpn1BDm6Ns+sQtHdAiVPwMN09J0tenfcIN5qjXXh9tQlqAwlKVWPE04RX3uI8Qpa3G24TM3ccZb531wCN04MaMZHRzYTqEiu/hHka87qbYJSzwczTsftYuIT0DB7EXtukQRmiPgmdqdAkVBWjZSGZnx+gQXjYw13rbcJ/QBw6icRojPOCH0Ox7NX1CegcuDrOd5tcmzPBqhuN89wkVCostVrGEYcIcPoRcr41DqOyA3zZtqbYWIX4IzXMfkEuolFsNYpOQAi3E97N0nlfKJcTFwCUSNM3TBqGD1NmvR/EPormEuBh49WEbG1SDEHpY/5IL1+vmE9q4D0yOjUH8Ejqw06D6Qd4PD3CAEBgDl8jp+2m/hFe4RWoOnHsNENo4d5808om/hA/Uz9ePyQbi0AOEzN3HfeNHn/AADLG/Zei4ZIhQiWHKnKi1YVMTwo6dP2Ld+XwjhD5uU/yukA+hVqKPe7s2/gxCYAz865R+CHP0VuEOH8wOEyoXlJPx3TDehM4ZPISGPpwiMULowwxH43MD5U0I1zNkJBl7hJDGqLlU65o3IUXP0cHjvHFChZaoVyC0SXi7Yycp8caSscYIlR1K2Rj3qEF4ADqglZDRBN5RQopSNsQ7NAgpNsL2+XxrCBVFRb0F/RLesAEoEo6nmY8T0jMoBv7+zk/CPXiS+uPJdBNjSEuMefX+0E/CK3QIjYHj5rmEig/JA2cvcv0QRtDtvuV+riKkMWYQrWcsuiK8Qbd78phK250iVCjGsiHZ7U34AwVUJ+9dTxIqO9CO8fMidGzkXhH4U4AzCClGuVvVsZ5UZbABlyE5Td+5miZUfIhlY9zfhMAATf8obR2hUkDepjIeGaEGHEKzf8q8jtCGeOSG9iTMcfcNeJkC6wiVHcKNcvOK0IlxY5iOJ5UvIVRiAGGVBMIIcbshKecAytedPYMQ4e5XmUqMEBeHDWZc7HQOdqHrsT0JSQtAbDGtCDXYMiS8o7Q2XnT1bWWnq0l29/0JRPsk/kquxghhiqaf6NHlu+V+NXSMsJLTboIREANnqkaSYWa3Mb4VRtqLryZkjGd/dLLGwsabcWaEqDizdRrBc257WtPUhGp2eoxpHV/4QoRRMkKQRUOC4a3Q0Q5KY0Z+CZmUcTHISM+irjnxGCFqCAe3Qmf/T2lBtAhVVb+c7YEd0hZPeZMlB6NoDH3A4o5+rkpnkDqEjPEU+3xGYWXjOtIeQ5jyvcLoX97l4xBWCzLecedpLHjvw9UkzGZhcfPktWvO29k5hIyxvBe8eaqLGSRuLkFuiXIt7n1O+ZYLl5Ax6icO405M2Vi+BLlawcmv/hniGyR8Ttaz0k3NFFM2RiEhPAvr0smRdf4p/eU3g7AayEdXsQrl1xqxBMgxIcf2MYXDtOeYrTJGWEFe2oxCNSaMiwTwUYxW8CnKx02xSUImp6bFKnTgRnRJ3LoljRi3c6NTfHMIK7O88TMCOwZJJOEji0aenKMp03zzCJk5V5vlVMDdJ54kfkbwPkpzoh97yuVbQliZrO+BFKkxEUqijjRJDq/peZh0aZcSMnPuXjx/VCAGfhQmfNaBiLTrdFhiBWGlWJ+M6zV+IAlGaUh5k297rnEGIXxaATtqr/bxTEFCEua3wzK+pYTq04dcfelElNAs/y3lW0HIGC9rlY0puA5N7z7g2WEJVW/t4X4grGmC7Lw5YZYEq5XpEbAfHvXdsmFcSJipR4GlFIrbNGyqhpehQIs4YaaGIpY3s2kgmcemd16AuGg/TAIhXcjsUlS6YzZ/GOcTik3QJ6GO8A9fP0VKPGEofGrE/EPc6aFxPM/bGecSeoCMDObjA0tgEJIMx68XEyaQ9DajEI21pa0SGiQ9zTj9nEOYdCaouXI8LVswXmp6F09qMYYXbmh3IaHXrj1CjtnKfdu9isa8g+J6b+UUEFONp84FJyJRXRONpGq8tmqVq4meW5Dw6tCyM1X1cZUzQZi0dwhCvIu9Ot7mOpK8nu71Aroma35C2lP1VIzsjqOESceEIWFZ0PUpUibg/NCschF/imNTJxPJuwz7HCMxbzVsmzCv+UBXX018nh+KngG/Loo6/+7tYWRrZwhxmNDr8L3WNF1fuu55Bix8jv+ORUVXtbWkSaAPTNWhk5nOAvzoZSpQDN4qILkY5H2L6rZL25trWHKnKv90jfkQnQlavvZWW8A5eOZiIPJp3nVgHe3e7g1oenH3LGmAMPM6fER920dCie3PfBpAThRJP0czzr/MbTOq/anaJ8zUjo9kHB91wFskCpGi8tpIUh+vOUrQmqpssnWnapcw6/oQxDjVf+yLuOhVMUpQbqJ1/55yR+e2yWUEd3uU0OvMIqI2vonQDZpXbiIm7at1ofKn7DB6LZ+jTZh0ZqHpNee12AnwK78UlSPcykukatuQI3rD52gSdneITsznIZZH+84RxuR5G+276VHhtSwAI73v+oRdE60bt9uJ6YhPnjcoV999yC3ZX8JWxwHD+/gcNaHXmaDd2KsteAPqk6vvKJj7FlY3NzE/BS1j1dTPTxXyJvQ6PoSZdOLn9l0wXciqlAPwzgwJu0k1ka233eOgLN6EWc+H8E5d11n87vr7zgzs3lOz3sZnqhYtv6ryOXa0IgzbE/TN3hLh2qbfe0+4u2v9Uh/Ov7gzVZO40Hs+RNbLogEUAvneXYPdP+QWR4+uZWeqduL0zIm/c04+zsK1mr/3D4F3SLlVk26KN/IJyZGXzga4+dS8Q4q7B2zGvBxFRyuGmnoyBcuNsQIqDjXvAcsUVsQ/4KcKO/vS5b0ySR78oFUs/i5W4y43sHz32+HnyPXYs39JcBkIyvkAl651Hx9YU6FXy/M7joXVegqR9KHAag5QDO2aCsi6GMZwSYyoFa3yBo+OKeJq3ifnFV/bpF0PriP/slfbE2IeB0NxCj0DXqZb2wRZn8YYaTYhO35iEmIGJSd+Uy9CxKlTtz4NtMYQt6x2LdojDLKx3AY7A7xDr8YQuE7UeMu3fDw/BVLc5FvYYZNaXyQcvZOv5SN8oEr7/Vpf2DpKRjnWCn28Ag+kCj2vXhu25p4xdtlyjFDUrf8Ip+YeuG6iObJljBFiquzz6yY6gEupjWf0HP45hPSM+cz82pfgonSGvoJwh9goBuuXomvQDltvg4So+p6k5NeglXNoByQycGFvhFDcrX89eaiOsCxjB3Hwbvdg/VLUhd3BWtDoet5k4O7zACGstudIPW/wINat5OYRojLsxmqyo+vqD1hvfEJMG2QmZrs+87a9EUjJ8zK4hD6qiLBxaT9t4/4W5pmjbbiEqCZzvdq33R4l2P7Gn86jk4QQt/4pUz1K4H1meA4/h9BHbcUkmeozI18xT/o+sl8Hs09oZ7D1P9kriHlR4Hka2JN9ZugFNkcfPZ7te3b1m3j0ewWhKpXP69kl56DH1Y/tOvzb9Xua13cN3zuPFKM9uxTBwhBfmds7D97/kHRaL3b6rsGqlHMaLw0QwntYdhz+dnfAM6gea+9DjhHC+5Aa5SChj3HrpWV9SGWtBC9Fq+llNAkprG3Hol6ysvwP3ebRbSyRZqdV0Qo7tQweXP5WT+dGw+MmYYH6kiQY6sXwa325ra9T8yXEtQNe3pcb31vdqD9yTWjjWjqv6K0u74XLwbWFHD9LsSYULsdWCzfLZYpQPqC1zafg2YcQ1q5jOD1inFC+govRp2+H/01ow66v8lKxZhGibZtPsP1NKF738f2zY6dAE4SyAjZQX4bji1CwTNlXhusZziCUIdXcvmI+Hf4XIWoRWhMl0icIHSwieVZsrwgp6izP2k3UhZ0glJ0drha29D66ZIQUZVC4U4CThAwR27+E2cfVGIIW4eQIziBkiNiJWjgapSBrYgbgDEK2Fglw0yDmVcsx1hoxJtq9zCWUZRu5LxIvx8R/CaeZ8lpCGZENWYtRQmJrA21cVxLKV0gez+fdIJ8rmdFnYgGhfGjfDfl70Ufbgq0glPcX8/+DSMzLnDYTywjlCNjNVlBIUEz3ellOKMs0AUfgVoqVzNMxywnlQ2n8/TASo5zst7SaUNaKFBwrXg6YFrOX4ApC2cn1v52plprPsGMECJlOjZE23EIh0mNGGxRBQjnK1b8aRstbOoCrCKts+z/Z/YkUL1uB6wkrI876dUZjrpkGIWQe1dB1u634TP7Z2WaEVdT/F604ZqXNN2JQhGz/z9JfUauEmPrP9OtsQMiWox5szkhIkE21/dyOkLnG5XFTRkKO+hIjFE/IjJyLt9mCJFJ4WrEDYgmrG/cP1dzAImfLT31cRfkQhFWzuN3pCGYkRlDuFvkQQ4IgZHLLzyqBQbJfUs/5GgOGIyDCaiDzu2cAIIlhhSd6EJ+eb4ERMokO9B4aQvYcMYzwTg9jd/uWCpKQSbS/FrpprRpKNniS+sj3q60XvoAJ5WebPIXNV3cRJWF/792VnxsYT96CsBIn0vJYTV3XmrQH2Mi5bqrGuRbBll5LtiGsxHEcLT+XnuQyUIPpoAYs+2/2LwzNNb2yyDX2t5u9x3aEtTj73C7ii554YRCYkhkEoZfol7iw8/12YLX8B7q1HWilWlMZAAAAAElFTkSuQmCC' />
                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                        </div>
                        <h4 className="timeeee">0.00% <span>APY</span> </h4>
                    </div>
                    <div className="boxInner">
                        <h2 className="boxRedHeading">WETH - 4.0</h2>
                        <h2 className="timeeee">Time left: <span>17:20:00</span> </h2>
                    </div>
                    <div className="box__footer">
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button>Collect</button>

                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button className="Unstack">Unstack</button>
                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button>Stake</button>
                        </div>
                    </div>
                </div>
                <div className="boxWrapper">
                    <div className="boxInner__top">
                        <div className="logo____header">
                            <img className="first____img" src='data:image/png;base64,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' />
                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                        </div>
                        <h4 className="timeeee">0.00% <span>APY</span> </h4>
                    </div>
                    <div className="boxInner">
                        <h2 className="boxRedHeading">WETH - 4.0</h2>
                        <h2 className="timeeee">Time left: <span>17:20:00</span> </h2>
                    </div>
                    <div className="box__footer">
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button >Collect</button>

                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button className="Unstack">Unstack</button>
                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button>Stake</button>
                        </div>
                    </div>
                </div>
                <div className="boxWrapper">
                    <div className="boxInner__top">
                        <div className="logo____header">
                            <img className="first____img" src='data:image/png;base64,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' />
                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                        </div>
                        <h4 className="timeeee">0.00% <span>APY</span> </h4>
                    </div>
                    <div className="boxInner">
                        <h2 className="boxRedHeading">WETH - 4.0</h2>
                        <h2 className="timeeee">Time left: <span>17:20:00</span> </h2>
                    </div>
                    <div className="box__footer">
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button >Collect</button>

                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button className="Unstack">Unstack</button>
                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button>Stake</button>
                        </div>
                    </div>
                </div>
                <div className="boxWrapper">
                    <div className="boxInner__top">
                        <div className="logo____header">
                            <img className="first____img" src='data:image/png;base64,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' />
                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                        </div>
                        <h4 className="timeeee">0.00% <span>APY</span> </h4>
                    </div>
                    <div className="boxInner">
                        <h2 className="boxRedHeading">WETH - 4.0</h2>
                        <h2 className="timeeee">Time left: <span>17:20:00</span> </h2>
                    </div>
                    <div className="box__footer">
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button >Collect</button>

                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button className="Unstack">Unstack</button>
                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button>Stake</button>
                        </div>
                    </div>
                </div>
                <div className="boxWrapper">
                    <div className="boxInner__top">
                        <div className="logo____header">
                            <img className="first____img" src='data:image/png;base64,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' />
                            <img className="scond____img" src="https://seeklogo.com/images/U/uniswap-uni-logo-7B6173C76E-seeklogo.com.png" />
                        </div>
                        <h4 className="timeeee">0.00% <span>APY</span> </h4>
                    </div>
                    <div className="boxInner">
                        <h2 className="boxRedHeading">WETH - 4.0</h2>
                        <h2 className="timeeee">Time left: <span>17:20:00</span> </h2>
                    </div>
                    <div className="box__footer">
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button >Collect</button>

                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button className="Unstack">Unstack</button>
                        </div>
                        <div className="divider"></div>
                        <div className="box__footer__inner">
                            <b>Current Rewards</b>
                            <h5>0.001</h5>
                            <button>Stake</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default TabOne;
