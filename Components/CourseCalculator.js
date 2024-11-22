import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Import from react-native-elements

const CourseCalculator = () => {
    const [selectedCourses, setSelectedCourses] = useState({});
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    const handleCheckboxChange = (courseId) => {
        setSelectedCourses((prev) => ({
            ...prev,
            [courseId]: !prev[courseId],
        }));
    };

    const courses = [
        { id: 1, name: 'First Aid', price: 1500 },
        { id: 2, name: 'Sewing', price: 1500 },
        { id: 3, name: 'Land Scaping', price: 1500 },
        { id: 4, name: 'Life Skills', price: 1500 },
        { id: 5, name: 'Child Minding', price: 750 },
        { id: 6, name: 'Cooking', price: 750 },
        { id: 7, name: 'Garden Maintenance', price: 750 },
    ];

    

    const calculateTotal = () => {
        let totalPrice = 0;
        let selectedCount = 0;

        courses.forEach((course) => {
            if (selectedCourses[course.id]) {
                totalPrice += course.price;
                selectedCount++;
            }
        });

        let discountAmount = 0;
        if (selectedCount >= 2) {
            const discountPercentage = (0.05); // 5% per additional course
            discountAmount = (totalPrice * discountPercentage );
        }

        setDiscount(discountAmount);
        setTotal(totalPrice - discountAmount);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Course Calculator</Text>
            {courses.map((course) => (
                <View key={course.id} style={styles.checkboxContainer}>
            <CheckBox
            center={true} // Optional: center the checkbox
            title={course.name}
            checked={selectedCourses[course.id] || false} // Set checked state
            onPress={() => handleCheckboxChange(course.id)}
          />
          <Text style={styles.label}>
            {course.name} (R{course.price})
          </Text>
                </View>
            ))}
            <Button title="Calculate" onPress={calculateTotal} />
            <Text style={styles.result}>Discount: R{discount.toFixed(2)}</Text>
            <Text style={styles.result}>Total: R{total.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    label: {
        marginLeft: 10,
        fontSize: 16,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CourseCalculator;
