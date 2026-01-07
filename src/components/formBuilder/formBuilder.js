import React, {useState, useRef} from 'react';
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    OutlinedInput,
    Switch,
    FormControlLabel, InputAdornment, IconButton,
} from '@mui/material';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


const FormBuilderNew = ({items = [], patchValue = {}, formResult, showSaveButton = true, showResetButton = false}) => {
    const {handleSubmit, control, setValue, reset} = useForm({defaultValues: patchValue});
    const [otpDigits, setOtpDigits] = useState(Array(6).fill(''));
    const otpRefs = useRef([]);

    const onSubmit = (data) => {
        data.code = otpDigits.join('');
        console.log(data);
        formResult?.(data);
    };

    const handleOtpChange = (e, index) => {
        const val = e.target.value.replace(/\D/g, '');
        const newOtp = [...otpDigits];
        newOtp[index] = val;
        setOtpDigits(newOtp);
        if (val && index < otpDigits.length - 1) otpRefs.current[index + 1]?.focus();
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const triggerFileSelect = (index) => {
        document.getElementById(`image_data_${index}`)?.click();
    };

    const addFileData = (e, name) => {
        setValue(name, e.target.files[0]);
    };

    const resetForm = () => {
        reset({});
        setOtpDigits(Array(6).fill(''));
    };

    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {items.map((section, si) => (
                <div key={si} className={section?.classList}>
                    {section.label && !section.hidden &&
                        <div className="text-end fw-bold pb-3 my-1 text-secondary">{section.label}</div>}
                    <Card className="my-input">
                        <CardContent>
                            {section.fields?.map((item, i) => {
                                if (item.hidden) return null;

                                if (item.readOnly) {
                                    return (
                                        <div key={i} className="read-only-box my-3">
                                            <div className="label">{item.label}</div>
                                            <div className="text-end f-3">{patchValue[item.formControlName]}</div>
                                        </div>
                                    );
                                }

                                switch (item.type) {
                                    case 'text':
                                        return (
                                            <Controller
                                                key={i}
                                                name={item.formControlName}
                                                control={control}
                                                render={({field}) => (
                                                    <TextField
                                                        {...field}
                                                        label={item.label}
                                                        type="text"
                                                        fullWidth
                                                        helperText={item.hint}
                                                        margin="normal"
                                                    />
                                                )}
                                            />
                                        );

                                    case 'password':
                                        return (
                                            <Controller
                                                key={i}
                                                name={item.formControlName}
                                                control={control}
                                                render={({field}) => {
                                                    return (
                                                        <TextField
                                                            {...field}
                                                            label={item.label}
                                                            type={showPassword ? 'text' : 'password'}
                                                            fullWidth
                                                            helperText={item.hint}
                                                            margin="normal"
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            onClick={() => setShowPassword((prev) => !prev)}
                                                                            edge="end"
                                                                        >
                                                                            {showPassword ? <VisibilityOff/> :
                                                                                <Visibility/>}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    );
                                                }}
                                            />
                                        );
                                    // case 'text':
                                    // case 'password':
                                    //     return (
                                    //         <Controller
                                    //             key={i}
                                    //             name={item.formControlName}
                                    //             control={control}
                                    //             render={({ field }) => (
                                    //                 <TextField
                                    //                     {...field}
                                    //                     label={item.label}
                                    //                     type={item.type === 'password' ? (item.hidePassword ? 'password' : 'text') : item.type}
                                    //                     fullWidth
                                    //                     onClick={() => item.type === 'password' && (item.hidePassword = !item.hidePassword)}
                                    //                     helperText={item.hint}
                                    //                     margin="normal"
                                    //                 />
                                    //             )}
                                    //         />
                                    //     );

                                    case 'select':
                                        return (
                                            <Controller
                                                key={i}
                                                name={item.formControlName}
                                                control={control}
                                                render={({field}) => (
                                                    <FormControl fullWidth margin="normal">
                                                        <InputLabel>{item.label}</InputLabel>
                                                        <Select {...field} multiple={item.isMultiple}
                                                                input={<OutlinedInput label={item.label}/>}>
                                                            {item.options?.map((opt, oi) => (
                                                                <MenuItem key={oi} value={opt.value}>
                                                                    {opt.name}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                )}
                                            />
                                        );

                                    case "date":
                                        return (
                                            <Controller
                                                key={i}
                                                name={item.formControlName}
                                                control={control}
                                                render={({field}) => (
                                                    <DatePicker
                                                        value={field.value}
                                                        onChange={(val) =>
                                                            field.onChange(val?.format?.("YYYY/MM/DD"))
                                                        }
                                                        calendar={persian}
                                                        locale={persian_fa}
                                                        format="YYYY/MM/DD"
                                                        inputMode="none"
                                                        render={(value, openCalendar) => (
                                                            <TextField
                                                                value={value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                fullWidth
                                                                margin="normal"
                                                                label={item.label}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton onClick={openCalendar}
                                                                                        edge="end">
                                                                                <CalendarTodayIcon/>
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                )}
                                            />
                                        );

                                    case 'textarea':
                                        return (
                                            <Controller
                                                key={i}
                                                name={item.formControlName}
                                                control={control}
                                                render={({field}) => (
                                                    <TextField {...field} label={item.label} multiline rows={4}
                                                               fullWidth margin="normal"/>
                                                )}
                                            />
                                        );

                                    case 'toggle':
                                        return (
                                            <Controller
                                                key={i}
                                                name={item.formControlName}
                                                control={control}
                                                render={({field}) => (
                                                    <FormControlLabel
                                                        control={<Switch {...field} checked={!!field.value}/>}
                                                        label={item.label}
                                                    />
                                                )}
                                            />
                                        );

                                    case 'otp':
                                        return (
                                            <div key={i} className="otp-wrapper my-4">
                                                {otpDigits.map((digit, idx) => (
                                                    <input
                                                        key={idx}
                                                        type="text"
                                                        maxLength={1}
                                                        className="otp-input"
                                                        value={digit}
                                                        onChange={(e) => handleOtpChange(e, idx)}
                                                        onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                                                        ref={(el) => (otpRefs.current[idx] = el)}
                                                    />
                                                ))}
                                            </div>
                                        );

                                    case 'image':
                                        return (
                                            <div key={i}>
                                                <input
                                                    type="file"
                                                    id={`image_data_${i}`}
                                                    className="d-none"
                                                    onChange={(e) => addFileData(e, item.formControlName)}
                                                />
                                                <Button
                                                    variant="contained"
                                                    onClick={() => triggerFileSelect(i)}
                                                    fullWidth
                                                    sx={{mb: 2}}
                                                >
                                                    بارگذاری {item.label}
                                                </Button>
                                            </div>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </CardContent>
                    </Card>
                </div>
            ))}

            <div className="row mt-2">
                {showSaveButton && (
                    <div className="col-6">
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            ذخیره
                        </Button>
                    </div>
                )}
                {showResetButton && (
                    <div className="col-6">
                        <Button type="button" variant="contained" color="error" fullWidth onClick={resetForm}>
                            پاک کردن فیلدها
                        </Button>
                    </div>
                )}
            </div>
        </form>
    );
};

export default FormBuilderNew;
