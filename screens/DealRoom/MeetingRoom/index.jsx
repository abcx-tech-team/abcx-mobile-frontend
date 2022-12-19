import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { colors, sizes } from '../../../utils';
import DealScreenHeader from '../../../components/dealRoom/DealScreenHeader';
import { useMeetingRoomDates } from '../../../hooks/deal.hooks';
import CallSetUpForm from '../../../components/dealRoom/CallSetUpForm';
import SelectedDateCard from '../../../components/dealRoom/SelectedDateCard';
import ApprovedDateCard from '../../../components/dealRoom/ApprovedDateCard';
import SecondaryButton from '../../../components/common/SecondaryButton';

const MeetingRoom = ({ navigation, route }) => {
  const { dealId, isBuyer } = route.params;
  const { data: meetingRoomDates, isLoading: loadingMeetingRoomDates } =
    useMeetingRoomDates(dealId, !!dealId);
  const [showForm, setShowForm] = useState(false);

  const buyerSelectedDates = useMemo(
    () => (meetingRoomDates ? meetingRoomDates.meetingRoomdatesBuyer : []),
    [meetingRoomDates]
  );

  const sellerSelectedDates = useMemo(
    () => (meetingRoomDates ? meetingRoomDates.meetingRoomdatesSeller : []),
    [meetingRoomDates]
  );

  const approvedDate = useMemo(() => {
    const date = [...sellerSelectedDates, ...buyerSelectedDates].find(
      (item) => item.is_approved_date
    );
    return date;
  }, [buyerSelectedDates, sellerSelectedDates]);

  return (
    <View style={styles.meetingRoomContainer}>
      <DealScreenHeader
        onBackPress={() => navigation.goBack()}
        screenName='Create New Meeting'
      />
      <View style={styles.meetingRoom}>
        {loadingMeetingRoomDates ? (
          <ActivityIndicator size='large' />
        ) : approvedDate ? (
          <View style={styles.approvedCardContainer}>
            <ApprovedDateCard date={approvedDate} />
          </View>
        ) : showForm ? (
          <CallSetUpForm
            showForm={showForm}
            navigation={navigation}
            dealId={dealId}
            setShowForm={setShowForm}
          />
        ) : (
          renderComponent({
            buyerSelectedDates,
            sellerSelectedDates,
            isBuyer,
            dealId,
            navigation,
            setShowForm,
            showForm,
          })
        )}
      </View>
    </View>
  );
};

const renderComponent = ({
  buyerSelectedDates,
  sellerSelectedDates,
  isBuyer,
  dealId,
  navigation,
  setShowForm,
  showForm,
}) => {
  if (buyerSelectedDates.length && sellerSelectedDates.length) {
    return (
      <CommonCardView
        buyerSelectedDate={buyerSelectedDates[0]}
        sellerSelectedDate={sellerSelectedDates[0]}
        isBuyer={isBuyer}
        dealId={dealId}
      />
    );
  } else if (!buyerSelectedDates.length && !sellerSelectedDates.length) {
    return (
      <CommonFormView
        dealId={dealId}
        navigation={navigation}
        showForm={showForm}
      />
    );
  } else if (isBuyer) {
    return (
      <BuyerView
        buyerSelectedDates={buyerSelectedDates}
        sellerSelectedDates={sellerSelectedDates}
        setShowForm={setShowForm}
        dealId={dealId}
      />
    );
  } else {
    return (
      <SellerView
        buyerSelectedDates={buyerSelectedDates}
        sellerSelectedDates={sellerSelectedDates}
        dealId={dealId}
        setShowForm={setShowForm}
      />
    );
  }
};

const BuyerView = ({
  buyerSelectedDates,
  sellerSelectedDates,
  setShowForm,
  dealId,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: sizes.p2, marginBottom: sizes.p3 }}>
        <Text>I am the buyer</Text>
        {buyerSelectedDates.length && !sellerSelectedDates.length ? (
          <>
            <SelectedDateCard
              date={buyerSelectedDates[0]}
              showMine
              dealId={dealId}
            />
            <Text style={styles.counterPartyMessage}>
              Seller member haven't selected any dates yet
            </Text>
          </>
        ) : null}
        {!buyerSelectedDates.length && sellerSelectedDates.length ? (
          <>
            <SelectedDateCard
              date={sellerSelectedDates[0]}
              showApprove
              dealId={dealId}
            />
            <SecondaryButton
              noLoader
              title='Suggest new Date and Time'
              onClick={() => setShowForm(true)}
            />
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

const SellerView = ({
  buyerSelectedDates,
  sellerSelectedDates,
  dealId,
  setShowForm,
}) => {
  return (
    <View style={{ paddingHorizontal: sizes.p2, marginBottom: sizes.p3 }}>
      <Text>I am the seller</Text>
      {sellerSelectedDates.length && !buyerSelectedDates.length ? (
        <>
          <SelectedDateCard
            date={sellerSelectedDates[0]}
            showMine
            dealId={dealId}
          />
          <Text style={styles.counterPartyMessage}>
            Buyer member haven't selected any date yet
          </Text>
        </>
      ) : null}
      {!sellerSelectedDates.length && buyerSelectedDates.length ? (
        <>
          <>
            <SelectedDateCard
              date={buyerSelectedDates[0]}
              showApprove
              dealId={dealId}
            />
            <SecondaryButton
              noLoader
              title='Suggest new Date and Time'
              onClick={() => setShowForm(true)}
            />
          </>
        </>
      ) : null}
    </View>
  );
};

const CommonFormView = ({ dealId, navigation, showForm }) => {
  return (
    <CallSetUpForm
      navigation={navigation}
      dealId={dealId}
      showForm={showForm}
    />
  );
};

const CommonCardView = ({
  isBuyer,
  buyerSelectedDate,
  sellerSelectedDate,
  dealId,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: sizes.p2, marginBottom: sizes.p3 }}>
        <Text style={styles.heading}>
          You already selected your preferred date but you can still approve the
          the date selected by {isBuyer ? 'seller' : 'buyer'} member
        </Text>
        <SelectedDateCard
          date={buyerSelectedDate}
          showApprove={!isBuyer}
          showMine={isBuyer}
          dealId={dealId}
        />
        <SelectedDateCard
          date={sellerSelectedDate}
          showApprove={isBuyer}
          showMine={!isBuyer}
          dealId={dealId}
        />
      </View>
    </ScrollView>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  meetingRoomContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  meetingRoom: {
    flex: 1,
  },
  counterPartyMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: sizes.p2,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: sizes.p2,
  },
  approvedCardContainer: {
    paddingHorizontal: sizes.p2,
  },
});
