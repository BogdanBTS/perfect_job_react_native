import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './recentjobs.style'
import { COLORS, SIZES } from '../../../constants';
import RecentJobCard from '../../common/cards/recent/RecentJobCard';
import useFetch from '../../../hook/useFetch';

const Recentjobs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(
        'search', {
        query: 'React in Gdansk, Poland',
        num_pages: 1,
        date_posted: 'month',
    }
    )

    const [selectedJob, setSelectedJob] = useState()

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Recent React Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (<ActivityIndicator size='large' colors={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <RecentJobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={item => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                        showsHorizontalScrollIndicator={false}

                    />
                )}
            </View>
        </View>
    )
}

export default Recentjobs